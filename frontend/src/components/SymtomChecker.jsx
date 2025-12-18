import React, { useState } from "react";
import "./SymptomChecker.css"; // styling file

function SymptomChecker() {
  const [symptoms, setSymptoms] = useState("");
  const [loading, setLoading] = useState(false);
  const [advice, setAdvice] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setAdvice("");
    setError("");

    try {
      const response = await fetch("http://localhost:5000/api/symptoms", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ symptoms }),
      });

      const data = await response.json();
      if (response.ok) {
        setAdvice(data.advice || "No advice found");
      } else {
        setError(data.error || "Something went wrong");
      }
    } catch (err) {
      setError("⚠️ Unable to connect to server");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="symptom-checker">
      <h2>🩺 Symptom Checker</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          rows="5"
          placeholder="Enter your symptoms..."
          value={symptoms}
          onChange={(e) => setSymptoms(e.target.value)}
          required
        />
        <button type="submit" disabled={loading}>
          {loading ? "Checking..." : "Get Advice"}
        </button>
      </form>

      {advice && (
        <div className="result success">
          <h3>✅ AI Medical Advice:</h3>
          <p>{advice}</p>
        </div>
      )}

      {error && (
        <div className="result error">
          <h3>❌ Error:</h3>
          <p>{error}</p>
        </div>
      )}
    </div>
  );
}

export default SymptomChecker;
