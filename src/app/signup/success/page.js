export const metadata = {
  title: "Welcome to the Daxson Insider Community",
};

export default function SignupSuccessPage() {
  return (
    <main className="signup-page">
      <section className="signup-hero">
        <div className="signup-bg" />
        <div className="signup-overlay" />

        <a className="signup-logo" href="/" aria-label="Back to Daxson homepage">
          <img src="/assets/daxson-logo.png" alt="Daxson" />
        </a>

        <div className="signup-card">
          <p className="section-kicker signup-kicker">Welcome</p>
          <h1>You’re In</h1>
          <p className="signup-intro">
            Thanks for joining the Daxson Insider Community. You’ll now be first to hear about new music, tour dates, exclusive content and presale access.
          </p>

          <a className="button primary" href="/">
            Back to Homepage
          </a>
        </div>
      </section>
    </main>
  );
}