"use client";

import { trackEvent } from "../lib/analytics";

export default function TrackedTicketLink({
  ticketUrl,
  venue,
  city,
  country,
}) {
  function handleClick() {
    trackEvent("ticket_click", {
      venue,
      city,
      country: country || "",
      ticket_url: ticketUrl,
    });
  }

  return (
    <a
      className="ticket"
      href={ticketUrl}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
    >
      Tickets
    </a>
  );
}