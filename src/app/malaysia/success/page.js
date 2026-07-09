export const metadata = {
  title: "Interest Registered | Daxson Kuala Lumpur",
};

export default function MalaysiaSuccessPage() {
  return (
    <main className="signup-page">
      <section className="signup-hero">
        <div className="signup-bg" />
        <div className="signup-overlay" />

        <a className="signup-logo" href="/" aria-label="Back to Daxson homepage">
          <img src="/assets/daxson-logo.png" alt="Daxson" />
        </a>

        <div className="signup-card">
          <p className="section-kicker signup-kicker">Thank You</p>
          <h1>Interest Registered</h1>
          <p className="signup-intro">
            Thanks for registering your interest in a future Daxson event in Kuala Lumpur. If there is enough demand, updates will be shared by email.
          </p>

          <a className="button primary" href="/">
            Back to Homepage
          </a>
        </div>
      </section>
    </main>
  );
}
