import { useState } from "react";
import { Link } from "react-router-dom";
import Page from "../components/Page";
import { api } from "../api";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);
  const [sent, setSent] = useState(false);

  async function onSubmit(e) {
    e.preventDefault();
    setError(""); setBusy(true);
    try {
      const data = await api.post("/auth/forgot-password", { email });
      setMessage(data.message);
      setSent(true);
    } catch (err) {
      setError(err.message);
    } finally {
      setBusy(false);
    }
  }

  return (
    <Page>
      <section className="auth-wrap">
        <form className="card form auth-card" onSubmit={onSubmit}>
          <h1 className="h-sm">Forgot <span>password?</span></h1>
          <p className="muted small">Enter the email on your account — we'll send you a link to set a new password.</p>

          {error && <p className="notice notice-error">{error}</p>}
          {message && <p className="notice notice-success">{message}</p>}

          {!sent && (
            <>
              <label>Email<input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required autoComplete="email" /></label>
              <button className="btn btn-primary btn-block" disabled={busy}>{busy ? "Sending…" : "Send Reset Link"}</button>
            </>
          )}

          <p className="muted small center">Remembered it? <Link to="/login">Log in</Link></p>
        </form>
      </section>
    </Page>
  );
}