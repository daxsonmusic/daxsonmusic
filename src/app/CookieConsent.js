"use client";

import { useEffect, useState } from "react";

const PIXEL_ID = "871324469319038";

export default function CookieConsent() {
  const [choice, setChoice] = useState(null);

  useEffect(() => {
    const saved = localStorage.getItem("cookie-consent");
    if (saved) setChoice(saved);
    if (saved === "accepted") loadPixel();
  }, []);

  function loadPixel() {
    if (window.fbq) return;

    !(function (f, b, e, v, n, t, s) {
      if (f.fbq) return;
      n = f.fbq = function () {
        n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
      };
      if (!f._fbq) f._fbq = n;
      n.push = n;
      n.loaded = true;
      n.version = "2.0";
      n.queue = [];
      t = b.createElement(e);
      t.async = true;
      t.src = v;
      s = b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t, s);
    })(window, document, "script", "https://connect.facebook.net/en_US/fbevents.js");

    fbq("init", PIXEL_ID);
    fbq("track", "PageView");
  }

  function accept() {
    localStorage.setItem("cookie-consent", "accepted");
    setChoice("accepted");
    loadPixel();
  }

  function reject() {
    localStorage.setItem("cookie-consent", "rejected");
    setChoice("rejected");
  }

  if (choice) return null;

  return (
    <div className="cookie-banner">
      <p>
        We use cookies and Meta Pixel to understand website traffic and improve ads.
      </p>
      <div>
        <button onClick={reject}>Reject</button>
        <button onClick={accept}>Accept</button>
      </div>
    </div>
  );
}