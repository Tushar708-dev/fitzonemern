import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Page from "../components/Page";
import { useAuth } from "../AuthContext";

export default function Signup() {
  const { signup } = useAuth();
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", email: "", password: "", confirm: "" });
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);
  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  async function onSubmit(e) {
    e.preventDefault();
    if (form.password !== form.confirm) return setError("Passwords do not match.");
    setError(""); setBusy(true);
    try {
      await signup(form.name, form.email, form.password);
      navigate("/dashboard", { replace: true });
    } catch (err) {
      setError(err.message); setBusy(false);
    }
  }

  return (
    <Page>
      <section className="auth-wrap">
        <form className="card form auth-card" onSubmit={onSubmit}>
          <h1 className="h-sm">Create your <span>account</span></h1>
          {error && <p className="notice notice-error">{error}</p>}
          <label>Full name<input name="name" value={form.name} onChange={onChange} required autoComplete="name" /></label>
          <label>Email<input type="email" name="email" value={form.email} onChange={onChange} required autoComplete="email" /></label>
          <label>Password<input type="password" name="password" minLength="6" value={form.password} onChange={onChange} required autoComplete="new-password" /><small className="muted">At least 6 characters</small></label>
          <label>Confirm password<input type="password" name="confirm" minLength="6" value={form.confirm} onChange={onChange} required autoComplete="new-password" /></label>
          <button className="btn btn-primary btn-block" disabled={busy}>{busy ? "Creating…" : "Sign Up"}</button>
          <p className="muted small center">Already a member? <Link to="/login">Log in</Link></p>
        </form>
      </section>
    </Page>
  );
}
