import "./globals.css";
import CookieConsent from "./CookieConsent";

export const metadata = {
  title: "Daxson | Official Website",
  description: "Official website for Daxson. Tour dates, music, socials and booking contact.",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Daxson | Official Website",
    description: "Tour dates, music and booking contact for Daxson.",
    url: "https://daxsonmusic.com",
    siteName: "Daxson",
    images: ["/assets/daxson-hero.jpg"],
    type: "website"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <CookieConsent />
      </body>
    </html>
  );
}