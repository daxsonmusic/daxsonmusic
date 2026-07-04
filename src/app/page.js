import { getTourDates } from "../lib/tourDates";

export const revalidate = 3600;

export default async function Home() {
  const shows = await getTourDates();

  return (
    <>
      <div className="noise" />
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Daxson home">
          <img src="/assets/daxson-logo.png" alt="Daxson logo" />
        </a>
        <nav className="nav">
          <a href="#tour">Tour</a>
          <a href="#music">Music</a>
          <a href="#connect">Connect</a>
          <a href="#bookings">Bookings</a>
        </nav>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero-bg" role="img" aria-label="Daxson press photo" />
          <div className="hero-vignette" />
          <div className="hero-content">
            <img className="hero-logo" src="/assets/daxson-logo.png" alt="Daxson" />
            <div className="hero-actions">
              <a className="button primary" href="https://open.spotify.com/artist/4WwMR8h0vztJLNgiL5ZFqW?si=DvKNgpnLTGaypVDQLtVlMA" target="_blank" rel="noreferrer">
                Listen on Spotify
              </a>
              <a className="button ghost" href="#tour">Upcoming Shows</a>
            </div>
          </div>
        </section>

        <section className="section tour" id="tour">
          <p className="section-kicker">Tour</p>
          <h1 className="section-title">Upcoming Shows</h1>
          <div className="shows">
            {shows.map((show, index) => (
              <article className="show-card" key={`${show.date}-${show.venue}-${index}`}>
                <div className="date">{show.displayDate}</div>
                <div className="show-info">
                  <h2>{show.venue}</h2>
                  <p><span>{show.flag}</span> {show.city}{show.country ? `, ${show.country}` : ""}</p>
                </div>
                {show.ticketUrl ? (
                  <a className="ticket" href={show.ticketUrl} target="_blank" rel="noreferrer">Tickets</a>
                ) : (
                  <span className="ticket muted">{show.ticketLabel || "Tickets soon"}</span>
                )}
              </article>
            ))}
          </div>
        </section>

        <section className="section split" id="music">
          <div className="panel">
            <p className="section-kicker">Music</p>
            <h2>Stream Daxson</h2>
            <iframe
              style={{ borderRadius: 12 }}
              src="https://open.spotify.com/embed/artist/4WwMR8h0vztJLNgiL5ZFqW?utm_source=generator&theme=0"
              width="100%"
              height="352"
              frameBorder="0"
              allowFullScreen
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              title="Daxson on Spotify"
            />
          </div>
          <div className="panel about">
            <p className="section-kicker">About</p>
            <p>Since Dan Dobson launched his Daxson alias in 2017 he has performed at prestigious clubs &amp; festivals around the world including Creamfields, Transmission, Dreamstate, EDC Las Vegas, UNTOLD, Dance Valley, Ministry of Sound, Luminosity, Groove Cruise while maintaining a long standing residency with Rong Events.</p>
            <p>Being named by label boss, Markus Schulz as an exceptional talent spearheading the next generation, it&apos;s no question that his melodies carry the emotion and uplifting feeling that many say defines Trance. Off the back of his debut artist album <em>Face the Future</em>, Daxson has made a significant leap forward embarking on extensive tours and amassing an ever growing fan base around the world.</p>
            <p>Daxson, known for his energetic sets and productions, has recently been blending genres, earning strong support from both the trance and techno communities. His tracks have become a regular standout in sets from Eli Brown over the past few years, alongside backing from Test, Armin van Buuren &amp; Adam Beyer. Building on that momentum, he has taken the natural next step creating original material that firmly establishes his presence in both worlds.</p>
            <p>A pivotal juncture in Daxson&apos;s journey has been his affiliation with Transmission Festival. From his debut in Poland to commanding audiences of over 15,000 in Bangkok, Melbourne, Kuala Lumpur, the GelreDome Arena in the Netherlands, and Prague&apos;s O2 Arena, Daxson is responsible for creating the festival&apos;s last four anthems since 2022. His album has now surpassed 5 million streams on Spotify alone, and the story of Daxson&apos;s legacy is far from over.</p>
          </div>
        </section>

        <section className="section connect" id="connect">
          <p className="section-kicker">Connect</p>
          <h2 className="section-title">Follow Daxson</h2>
          <div className="social-grid">
            <a href="https://instagram.com/daxsonmusic" target="_blank" rel="noreferrer">Instagram</a>
            <a href="https://open.spotify.com/artist/4WwMR8h0vztJLNgiL5ZFqW?si=DvKNgpnLTGaypVDQLtVlMA" target="_blank" rel="noreferrer">Spotify</a>
            <a href="https://music.apple.com/search?term=daxson" target="_blank" rel="noreferrer">Apple Music</a>
            <a href="https://soundcloud.com/daxsonmusic" target="_blank" rel="noreferrer">SoundCloud</a>
            <a href="https://youtube.com/@daxsonmusic" target="_blank" rel="noreferrer">YouTube</a>
            <a href="https://tiktok.com/@daxsonmusic" target="_blank" rel="noreferrer">TikTok</a>
            <a href="https://facebook.com/daxsonmusic" target="_blank" rel="noreferrer">Facebook</a>
          </div>
        </section>

        <section className="bookings" id="bookings">
          <p className="section-kicker">Bookings</p>
          <a className="bookings-email" href="mailto:bookings@totalvisiontalent.com">bookings@totalvisiontalent.com</a>
<h3>Contact &amp; Promos</h3>
<a href="mailto:info@daxsonmusic.com">
  info@daxsonmusic.com
</a>
        </section>
      </main>

      <footer>
        <p>© 2026 Daxson. All rights reserved.</p>
      </footer>
    </>
  );
}
