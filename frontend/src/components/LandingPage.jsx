import { useState } from "react";
import "../App.css";

export default function LandingPage({ onAuthSuccess }) {
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
      const payload =
        mode === "signup"
          ? formData
          : { email: formData.email, password: formData.password };

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

      const successMessage =
        mode === "signup"
          ? "Signup successful. Welcome to AMMA.in"
          : "Login successful. Welcome back";
      setMessage(successMessage);

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
    <section className="landing-page">
      <div className="landing-overlay">
        <header className="landing-topbar">
          <div className="brand">AMMA.IN</div>
          <div className="landing-actions">
            <button
              type="button"
              className={`landing-btn ${mode === "login" ? "active" : ""}`}
              onClick={() => switchMode("login")}
            >
              Login
            </button>
            <button
              type="button"
              className={`landing-btn ${mode === "signup" ? "active" : ""}`}
              onClick={() => switchMode("signup")}
            >
              Signup
            </button>
          </div>
        </header>

        <div className="landing-content">
          <div className="landing-copy">
            <h1>Your Care Journey Starts Here</h1>
            <p>
              Sign up if you are new, or log in if you already have an account.
              After authentication, you will enter the home page with symptom and
              medication tools.
            </p>
          </div>

          <form className="landing-form" onSubmit={handleSubmit}>
            <h2>{mode === "signup" ? "Create New Account" : "Login to Continue"}</h2>
            {mode === "signup" ? (
              <input
                type="text"
                name="name"
                placeholder="Full name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            ) : null}
            <input
              type="email"
              name="email"
              placeholder="Gmail address"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <button type="submit" className="landing-submit" disabled={loading}>
              {loading ? "Please wait..." : mode === "signup" ? "Sign Up" : "Login"}
            </button>
            {message ? <p className="landing-message">{message}</p> : null}
          </form>
        </div>
      </div>
    </section>
  );
}
