import { useState } from "react";
import "../App.css";
import heroIllustration from "./images/landing_logo.png";

const featureCards = [
  {
    title: "AI-Powered Predictions",
    text: "Get instant insights about your symptoms",
    icon: "brain",
  },
  {
    title: "Medication Reminders",
    text: "Never miss your medication again",
    icon: "pill",
  },
  {
    title: "Better Health Everyday",
    text: "Take small steps towards a healthier you",
    icon: "heart",
  },
];

function Icon({ kind }) {
  switch (kind) {
    case "login":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M10 17l5-5-5-5" />
          <path d="M15 12H3" />
          <path d="M21 4v16" />
        </svg>
      );
    case "user":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M20 21a8 8 0 10-16 0" />
          <circle cx="12" cy="8" r="4" />
        </svg>
      );
    case "brain":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M8 5a3 3 0 013-3h2a3 3 0 013 3 3 3 0 013 3v2a3 3 0 010 6v2a3 3 0 01-3 3 3 3 0 01-3 3H11a3 3 0 01-3-3 3 3 0 01-3-3v-2a3 3 0 010-6V8a3 3 0 013-3z" />
          <path d="M10 8c0 1.2-.8 2-1.8 2s-1.8-.8-1.8-2" />
          <path d="M17.6 8c0 1.2-.8 2-1.8 2S14 9.2 14 8" />
        </svg>
      );
    case "pill":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M8 20a5 5 0 010-10l6-6a5 5 0 117 7l-6 6a5 5 0 01-7 3z" />
          <path d="M10 14l4-4" />
        </svg>
      );
    case "heart":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M20.8 8.5A5.5 5.5 0 0012 6.2 5.5 5.5 0 003.2 8.5c0 5.2 8.8 10.7 8.8 10.7s8.8-5.5 8.8-10.7z" />
          <path d="M4 13h4l2-4 2 8 2-4h6" />
        </svg>
      );
    case "headache":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M9 18v-2a4 4 0 00-3-3.9A6 6 0 1118 10" />
          <path d="M12 19v2" />
          <path d="M7 6l1.5 2" />
          <path d="M17 6l-1.5 2" />
        </svg>
      );
    case "stomach":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M11 4c3 0 4 2 4 4s-1 3-1 4 2 2 2 4-2 4-5 4a6 6 0 01-6-6c0-3 2-4 4-5s2-1 2-3-1-2-1-2" />
        </svg>
      );
    case "chest":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M7 20v-8a5 5 0 015-5 5 5 0 015 5v8" />
          <path d="M12 7v6l3 2" />
        </svg>
      );
    case "joint":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M7 3l4 4-2 2 4 4-2 2 4 4" />
          <path d="M5 17l4-4" />
          <path d="M14 18l5-5" />
        </svg>
      );
    case "fever":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M10 14.5V5a2 2 0 114 0v9.5a4 4 0 11-4 0z" />
          <path d="M14 8h3" />
          <path d="M14 11h4" />
        </svg>
      );
    case "skin":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M7 4l2 3 2-3 2 3 2-3 2 3" />
          <path d="M5 19c2-1 3-3 3-6 0-3 1-5 4-5s4 2 4 5c0 3 1 5 3 6" />
          <path d="M9 13h.01M12 15h.01M15 13h.01" />
        </svg>
      );
    case "pregnancy":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 3a4 4 0 014 4c0 2-1 3-1 5v2a5 5 0 11-8 4" />
          <path d="M14 6h4" />
          <path d="M16 4v4" />
        </svg>
      );
    case "general":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 3l2.5 5 5.5.8-4 3.9.9 5.5-4.9-2.6-4.9 2.6.9-5.5-4-3.9 5.5-.8z" />
        </svg>
      );
    default:
      return null;
  }
}

function LandingPage({ onAuthSuccess }) {
  const [mode, setMode] = useState("login");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const apiBase = import.meta.env.VITE_BACKEND_URL || "http://localhost:3000";

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const switchMode = (newMode) => {
    setMode(newMode);
    setMessage("");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setMessage("");

    if (!formData.email || !formData.password || (mode === "signup" && !formData.name)) {
      setMessage("Please fill all required fields.");
      return;
    }

    try {
      setLoading(true);
      const endpoint = mode === "signup" ? "/signup" : "/login";
      const payload = mode === "signup" ? formData : { email: formData.email, password: formData.password };

      const response = await fetch(`${apiBase}${endpoint}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await response.json();
      if (!response.ok) {
        setMessage(data.error || `${mode} failed.`);
        return;
      }

      setMessage(mode === "signup" ? "Signup successful. Welcome to AMMA.in" : "Login successful. Welcome back");

      onAuthSuccess({
        token: data.token || "signed-up",
        name: formData.name || formData.email.split("@")[0],
      });
    } catch (error) {
      setMessage("Server not reachable. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="landing-page-shell">
      <div className="landing-page-glow landing-page-glow-left" aria-hidden="true" />
      <div className="landing-page-glow landing-page-glow-right" aria-hidden="true" />

      <div className="landing-page-card">
        <header className="landing-header">
          <div className="landing-brand">AMMA.IN</div>
          <div className="landing-actions">
            <button
              type="button"
              className={`landing-action landing-action-login ${mode === "login" ? "is-active" : ""}`}
              onClick={() => switchMode("login")}
            >
              <Icon kind="login" />
              <span>Login</span>
            </button>
            <button
              type="button"
              className={`landing-action landing-action-signup ${mode === "signup" ? "is-active" : ""}`}
              onClick={() => switchMode("signup")}
            >
              <Icon kind="user" />
              <span>Sign Up</span>
            </button>
          </div>
        </header>

        <main className="landing-main-grid">
          <section className="auth-panel">
            <form className="auth-card" onSubmit={handleSubmit}>
              <div className="auth-card-header">
                <div className="auth-card-avatar">
                  <Icon kind="user" />
                </div>
                <div>
                  <h2>{mode === "signup" ? "Create Account" : "Welcome Back"}</h2>
                  <p>{mode === "signup" ? "Join AMMA.IN and take care of your health" : "Login to continue your care journey"}</p>
                </div>
              </div>

              {mode === "signup" ? (
                <label className="auth-field">
                  <span>Name</span>
                  <input
                    type="text"
                    name="name"
                    placeholder="Full name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </label>
              ) : null}

              <label className="auth-field">
                <span>Email address</span>
                <input
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </label>

              <label className="auth-field">
                <span>Password</span>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </label>

              {mode === "login" ? (
                <div className="auth-meta-row">
                  <label className="auth-remember">
                    <input type="checkbox" />
                    <span>Remember me</span>
                  </label>
                  <button type="button" className="auth-link">
                    Forgot password?
                  </button>
                </div>
              ) : null}

              <button type="submit" className="auth-submit" disabled={loading}>
                {loading ? "Please wait..." : mode === "signup" ? "Create New Account" : "Login"}
              </button>

              {mode === "login" ? (
                <>
                  <div className="auth-divider">
                    <span>OR</span>
                  </div>
                  <button type="button" className="auth-secondary" onClick={() => switchMode("signup")}>
                    Create New Account
                  </button>
                </>
              ) : null}

              {message ? <p className="auth-message">{message}</p> : null}
            </form>
          </section>

          <section className="hero-panel" aria-label="Health hero illustration">
            <div className="hero-illustration-wrap">
              <img className="hero-illustration" src={heroIllustration} alt="Health care illustration" />
            </div>
          </section>
        </main>

        <section className="feature-strip">
          <div className="feature-intro">
            <h3>Your Health, Our Priority</h3>
            <p>
              AMMA.IN is your smart health companion. Get AI-powered disease predictions,
              manage medications, and take control of your well-being.
            </p>
          </div>

          <div className="feature-list">
            {featureCards.map((card) => (
              <article key={card.title} className="feature-item">
                <div className="feature-icon">
                  <Icon kind={card.icon} />
                </div>
                <div>
                  <h4>{card.title}</h4>
                  <p>{card.text}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <footer className="trust-row">
          <span>♥</span>
          <p>Trusted by thousands • Secure • Private • Reliable</p>
        </footer>
      </div>
    </section>
  );
}

export default LandingPage;
