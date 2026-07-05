export const metadata = {
  title: "Daxson Insider Community | Official Website",
  description: "Join the Daxson Insider Community for new music, tour dates, exclusive content and presale access.",
  alternates: {
    canonical: "/signup",
  },
};

export default function SignupPage() {
  return (
    <main className="signup-page">
      <section className="signup-hero">
        <div className="signup-bg" />
        <div className="signup-overlay" />

        <a className="signup-logo" href="/" aria-label="Back to Daxson homepage">
          <img src="/assets/daxson-logo.png" alt="Daxson" />
        </a>

        <div className="signup-card">
          <p className="section-kicker signup-kicker">Join the</p>
          <h1>Daxson Insider Community</h1>
          <p className="signup-intro">
            Be the first to hear about new music, tour dates, exclusive content and presale access.
          </p>

          <form className="insider-form" action="/api/signup" method="POST">
            <div className="form-row">
              <label>
                <span>First Name</span>
                <input name="firstName" type="text" autoComplete="given-name" placeholder="First Name" required />
              </label>

              <label>
                <span>Last Name</span>
                <input name="lastName" type="text" autoComplete="family-name" placeholder="Last Name" required />
              </label>
            </div>

            <label>
              <span>Email Address</span>
              <input name="email" type="email" autoComplete="email" placeholder="Email Address" required />
            </label>

            <div className="form-row">
              <label>
                <span>City</span>
                <input name="city" type="text" autoComplete="address-level2" placeholder="City" required />
              </label>

              <label>
                <span>Country</span>
                <input name="country" type="text" autoComplete="country-name" placeholder="Country" required />
              </label>
            </div>

            <button type="submit">Join the Insider Community</button>
          </form>

          <p className="signup-small">
            By signing up, you agree to receive email updates from Daxson. You can unsubscribe at any time.
          </p>
        </div>
      </section>
    </main>
  );
}
