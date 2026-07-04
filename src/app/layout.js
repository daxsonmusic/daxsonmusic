import "./globals.css";
import CookieConsent from "./CookieConsent";

export const metadata = {
  metadataBase: new URL("https://daxsonmusic.com"),
  title: "Daxson | Official Website",
  description: "Official website for Daxson. Tour dates, music, socials and booking contact.",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Daxson | Official Website",
    description: "Tour dates, music and booking contact for Daxson.",
    url: "https://daxsonmusic.com",
    siteName: "Daxson",
    images: [
      {
        url: "/assets/daxson-hero.jpg",
        width: 1200,
        height: 630,
        alt: "Daxson press photo",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Daxson | Official Website",
    description: "Tour dates, music and booking contact for Daxson.",
    images: ["/assets/daxson-hero.jpg"],
  },
};

const artistSchema = {
  "@context": "https://schema.org",
  "@type": "MusicGroup",
  name: "Daxson",
  alternateName: "Dan Dobson",
  url: "https://daxsonmusic.com",
  image: "https://daxsonmusic.com/assets/daxson-hero.jpg",
  genre: ["Trance", "Electronic Music", "Techno"],
  sameAs: [
    "https://open.spotify.com/artist/4WwMR8h0vztJLNgiL5ZFqW",
    "https://instagram.com/daxsonmusic",
    "https://soundcloud.com/daxsonmusic",
    "https://youtube.com/@daxsonmusic",
    "https://tiktok.com/@daxsonmusic",
    "https://facebook.com/daxsonmusic",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    email: "bookings@totalvisiontalent.com",
    contactType: "booking",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(artistSchema) }}
        />
        {children}
        <CookieConsent />
      </body>
    </html>
  );
}
