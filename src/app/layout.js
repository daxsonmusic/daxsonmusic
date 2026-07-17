import "./globals.css";
import CookieConsent from "./CookieConsent";

export const metadata = {
  metadataBase: new URL("https://daxsonmusic.com"),
  title: "Daxson | Official Website",
  description: "Official website for Daxson. Tour dates, music, socials and booking contact.",
icons: {
  icon: [
    { url: "/favicon.ico", sizes: "any" },
    { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
  ],
  apple: "/apple-touch-icon.png",
  shortcut: "/favicon.ico",
  other: [
    {
      rel: "mask-icon",
      url: "/safari-pinned-tab.svg",
      color: "#000000",
    },
  ],
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
  "@type": "Person",
  name: "Daxson",
  alternateName: "Dan Dobson",
  url: "https://daxsonmusic.com",
  image: "https://daxsonmusic.com/assets/daxson-hero.jpg",
  genre: [
    "Trance",
    "Electronic Dance Music",
    "Progressive Trance",
    "Uplifting Trance",
	"Techno",


  ],
  sameAs: [
    "https://open.spotify.com/artist/4WwMR8h0vztJLNgiL5ZFqW",
    "https://music.apple.com/us/artist/daxson/1206606147",
    "https://instagram.com/daxsonmusic",
    "https://facebook.com/daxsonmusic",
    "https://youtube.com/@daxsonmusic",
    "https://www.beatport.com/artist/daxson",
    "https://soundcloud.com/daxsonmusic",
    "https://tiktok.com/@daxsonmusic"
  ],
  contactPoint: [
    {
      "@type": "ContactPoint",
      "contactType": "Bookings",
      "email": "bookings@totalvisiontalent.com"
    },
    {
      "@type": "ContactPoint",
      "contactType": "Promos",
      "email": "info@daxsonmusic.com"
    }
  ]
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(artistSchema),
          }}
        />

        {children}

        <CookieConsent />
      </body>
    </html>
  );
}
