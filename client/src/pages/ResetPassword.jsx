import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Page from "../components/Page";
import { api } from "../api";

export default function ResetPassword() {
  const { token } = useParams(); // the long random code from the emailed link
  const navigate = useNavigate();
  const [form, setForm] = useState({ password: "", confirm: "" });
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);
  const [done, setDone] = useState(false);
  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  async function onSubmit(e) {
    e.preventDefault();
    if (form.password !== form.confirm) return setError("Passwords do not match.");
    setError(""); setBusy(true);
    try {
      await api.post(`/auth/reset-password/${token}`, { password: form.password });
      setDone(true);
      setTimeout(() => navigate("/login", { replace: true }), 2000);
    } catch (err) {
      setError(err.message);
      setBusy(false);
    }
  }

  return (
    <Page>
      <section className="auth-wrap">
        <form className="card form auth-card" onSubmit={onSubmit}>
          <h1 className="h-sm">Set a new <span>password</span></h1>

          {error && <p className="notice notice-error">{error}</p>}
          {done && <p className="notice notice-success">Password updated! Taking you to log in…</p>}

          {!done && (
            <>
              <label>New password<input type="password" name="password" minLength="6" value={form.password} onChange={onChange} required autoComplete="new-password" /><small className="muted">At least 6 characters</small></label>
              <label>Confirm new password<input type="password" name="confirm" minLength="6" value={form.confirm} onChange={onChange} required autoComplete="new-password" /></label>
              <button className="btn btn-primary btn-block" disabled={busy}>{busy ? "Saving…" : "Save New Password"}</button>
            </>
          )}

          <p className="muted small center"><Link to="/login">Back to log in</Link></p>
        </form>
      </section>
    </Page>
  );
}