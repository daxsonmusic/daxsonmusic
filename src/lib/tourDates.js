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

function parseCsv(text) {
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
    } else if (char === "," && !inQuotes) {
      row.push(current.trim());
      current = "";
    } else if ((char === "\n" || char === "\r") && !inQuotes) {
      if (current || row.length) {
        row.push(current.trim());
        rows.push(row);
        row = [];
        current = "";
      }
      if (char === "\r" && next === "\n") i++;
    } else {
      current += char;
    }
  }

  if (current || row.length) {
    row.push(current.trim());
    rows.push(row);
  }

  return rows;
}

function formatDisplayDate(dateValue, displayDate) {
  if (displayDate) return displayDate;
  if (!dateValue) return "";
  const d = new Date(`${dateValue}T12:00:00`);
  if (Number.isNaN(d.getTime())) return dateValue;
  return d.toLocaleDateString("en-GB", { month: "short", day: "2-digit" }).toUpperCase();
}

function normalizeBoolean(value) {
  return ["true", "yes", "1", "live", "visible"].includes(String(value || "").toLowerCase());
}

export async function getTourDates() {
  const csvUrl = process.env.NEXT_PUBLIC_TOUR_DATES_CSV_URL;

  if (!csvUrl) {
    return fallbackTourDates;
  }

  try {
    const res = await fetch(csvUrl, { next: { revalidate: 3600 } });
    if (!res.ok) throw new Error(`Google Sheet returned ${res.status}`);

    const rows = parseCsv(await res.text());
    const headers = rows.shift().map((h) => h.toLowerCase().replace(/\s+/g, ""));

    const get = (row, name) => {
      const index = headers.indexOf(name.toLowerCase().replace(/\s+/g, ""));
      return index >= 0 ? row[index] || "" : "";
    };

    const dates = rows
      .map((row) => {
        const country = get(row, "country");
        const ticketValue = get(row, "ticketurl") || get(row, "tickets") || get(row, "ticketlink");
        const showOnWebsite = get(row, "showonwebsite") || get(row, "visible") || get(row, "live");

        return {
          date: get(row, "startdate") || get(row, "date"),
          displayDate: formatDisplayDate(get(row, "startdate") || get(row, "date"), get(row, "displaydate")),
          venue: get(row, "venuefestival") || get(row, "venue") || get(row, "festival"),
          city: get(row, "city"),
          country,
          flag: get(row, "countrycodeflag") || get(row, "flag") || countryFlags[country] || "",
          ticketUrl: ticketValue.startsWith("http") ? ticketValue : "",
          ticketLabel: ticketValue && !ticketValue.startsWith("http") ? ticketValue : "Tickets soon",
          visible: normalizeBoolean(showOnWebsite)
        };
      })
      .filter((show) => show.visible && show.venue)
      .sort((a, b) => String(a.date).localeCompare(String(b.date)));

    return dates.length ? dates : fallbackTourDates;
  } catch (error) {
    console.error("Could not load Google Sheet tour dates:", error);
    return fallbackTourDates;
  }
}
