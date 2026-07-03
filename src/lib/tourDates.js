import { fallbackTourDates } from "./fallbackTourDates";

const countryFlags = {
  "Netherlands": "🇳🇱",
  "Poland": "🇵🇱",
  "USA": "🇺🇸",
  "United States": "🇺🇸",
  "Argentina": "🇦🇷",
  "Switzerland": "🇨🇭",
  "UK": "🇬🇧",
  "United Kingdom": "🇬🇧",
  "Puerto Rico": "🇵🇷",
  "Canada": "🇨🇦",
  "Thailand": "🇹🇭"
};

function normalizeHeader(value) {
  return String(value || "").toLowerCase().replace(/[^a-z0-9]/g, "");
}

function detectDelimiter(text) {
  const firstLine = text.split(/\r?\n/)[0] || "";
  const tabs = (firstLine.match(/\t/g) || []).length;
  const commas = (firstLine.match(/,/g) || []).length;
  return tabs > commas ? "\t" : ",";
}

function parseDelimited(text) {
  const delimiter = detectDelimiter(text);
  const rows = [];
  let current = "";
  let row = [];
  let inQuotes = false;

  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    const next = text[i + 1];

    if (char === '"' && next === '"') {
      current += '"';
      i++;
    } else if (char === '"') {
      inQuotes = !inQuotes;
    } else if (char === delimiter && !inQuotes) {
      row.push(current.trim());
      current = "";
    } else if ((char === "\n" || char === "\r") && !inQuotes) {
      if (current || row.some(Boolean)) {
        row.push(current.trim());
        rows.push(row);
      }
      row = [];
      current = "";
      if (char === "\r" && next === "\n") i++;
    } else {
      current += char;
    }
  }

  if (current || row.some(Boolean)) {
    row.push(current.trim());
    rows.push(row);
  }

  return rows.filter((r) => r.some((cell) => String(cell).trim()));
}

function googleSerialToDate(serial) {
  const number = Number(serial);
  if (!Number.isFinite(number)) return null;
  const utcDays = Math.floor(number - 25569);
  return new Date(utcDays * 86400 * 1000);
}

function formatDisplayDate(dateValue, displayDate) {
  if (displayDate) return displayDate;
  if (!dateValue) return "";

  const serialDate = googleSerialToDate(dateValue);
  if (serialDate && !Number.isNaN(serialDate.getTime())) {
    return serialDate.toLocaleDateString("en-GB", { month: "short", day: "2-digit", timeZone: "UTC" }).toUpperCase();
  }

  const d = new Date(`${dateValue}T12:00:00`);
  if (Number.isNaN(d.getTime())) return dateValue;
  return d.toLocaleDateString("en-GB", { month: "short", day: "2-digit" }).toUpperCase();
}

function normalizeBoolean(value) {
  return ["true", "yes", "1", "live", "visible"].includes(String(value || "").toLowerCase());
}

function normaliseTicket(ticketValue) {
  const value = String(ticketValue || "").trim();

  if (!value) return { ticketUrl: "", ticketLabel: "Tickets soon" };
  if (value.toLowerCase().includes("sold out")) return { ticketUrl: "", ticketLabel: "Sold out" };
  if (value.toLowerCase().includes("soon")) return { ticketUrl: "", ticketLabel: "Tickets soon" };
  if (value.startsWith("http://") || value.startsWith("https://")) return { ticketUrl: value, ticketLabel: "Tickets" };
  if (value.includes(".") && !value.includes(" ")) return { ticketUrl: `https://${value}`, ticketLabel: "Tickets" };

  return { ticketUrl: "", ticketLabel: value };
}

export async function getTourDates() {
  const csvUrl = process.env.NEXT_PUBLIC_TOUR_DATES_CSV_URL;

  if (!csvUrl) {
    return fallbackTourDates;
  }

  try {
    const res = await fetch(csvUrl, { next: { revalidate: 3600 } });
    if (!res.ok) throw new Error(`Google Sheet returned ${res.status}`);

    const rows = parseDelimited(await res.text());
    const headers = rows.shift().map(normalizeHeader);

    const get = (row, ...names) => {
      for (const name of names) {
        const index = headers.indexOf(normalizeHeader(name));
        if (index >= 0 && row[index]) return row[index].trim();
      }
      return "";
    };

    const dates = rows
      .map((row) => {
        const country = get(row, "country");
        const ticket = normaliseTicket(get(row, "ticket url", "ticketurl", "tickets", "ticket link"));
        const startDate = get(row, "start date", "date");

        return {
          date: startDate,
          displayDate: formatDisplayDate(startDate, get(row, "display date", "displaydate")),
          venue: get(row, "venue festival", "venue / festival", "venue", "festival"),
          city: get(row, "city"),
          country,
          flag: get(row, "flag", "country code flag") || countryFlags[country] || "",
          ticketUrl: ticket.ticketUrl,
          ticketLabel: ticket.ticketLabel,
          visible: normalizeBoolean(get(row, "show on website", "visible", "live"))
        };
      })
      .filter((show) => show.visible && show.venue)
      .sort((a, b) => Number(a.date || 0) - Number(b.date || 0));

    return dates.length ? dates : fallbackTourDates;
  } catch (error) {
    console.error("Could not load Google Sheet tour dates:", error);
    return fallbackTourDates;
  }
}
