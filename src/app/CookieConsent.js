"use client";

import { useEffect, useState } from "react";

const PIXEL_ID = "871324469319038";
const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

export default function CookieConsent() {
  const [choice, setChoice] = useState(null);

  useEffect(() => {
    const saved = localStorage.getItem("cookie-consent");

    if (saved) {
      setChoice(saved);
    }

    if (saved === "accepted") {
      loadPixel();
      loadGoogleAnalytics();
    }
  }, []);

  function loadPixel() {
    if (window.fbq) return;

    !(function (f, b, e, v, n, t, s) {
      if (f.fbq) return;

      n = f.fbq = function () {
        n.callMethod
          ? n.callMethod.apply(n, arguments)
          : n.queue.push(arguments);
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
    })(
      window,
      document,
      "script",
      "https://connect.facebook.net/en_US/fbevents.js"
    );

    window.fbq("init", PIXEL_ID);
    window.fbq("track", "PageView");
  }

  function loadGoogleAnalytics() {
    if (!GA_ID || window.gtag) return;

    const script = document.createElement("script");
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];

    window.gtag = function () {
      window.dataLayer.push(arguments);
    };

    window.gtag("js", new Date());
    window.gtag("config", GA_ID);
  }

  function accept() {
    localStorage.setItem("cookie-consent", "accepted");
    setChoice("accepted");

    loadPixel();
    loadGoogleAnalytics();
  }

  function reject() {
    localStorage.setItem("cookie-consent", "rejected");
    setChoice("rejected");
  }

  if (choice) return null;

  return (
    <div className="cookie-banner">
      <p>
        We use cookies, Google Analytics and Meta Pixel to understand website
        traffic and improve advertising.
      </p>

      <div>
        <button onClick={reject}>Reject</button>
        <button onClick={accept}>Accept</button>
      </div>
    </div>
  );
}