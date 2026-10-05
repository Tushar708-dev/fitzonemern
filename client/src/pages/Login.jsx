import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Page from "../components/Page";
import { useAuth } from "../AuthContext";

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);
  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  async function onSubmit(e) {
    e.preventDefault();
    setError(""); setBusy(true);
    try {
      await login(form.email, form.password);
      navigate((location.state && location.state.from) || "/dashboard", { replace: true });
    } catch (err) {
      setError(err.message); setBusy(false);
    }
  }

  return (
    <Page>
      <section className="auth-wrap">
        <form className="card form auth-card" onSubmit={onSubmit}>
          <h1 className="h-sm">Welcome <span>back</span></h1>
          {location.state && location.state.from && <p className="notice notice-info">Please log in to continue.</p>}
          {error && <p className="notice notice-error">{error}</p>}
          <label>Email<input type="email" name="email" value={form.email} onChange={onChange} required autoComplete="email" /></label>
          <label>Password<input type="password" name="password" value={form.password} onChange={onChange} required autoComplete="current-password" /></label>
          <p className="muted small" style={{ textAlign: "right", marginTop: "-0.4rem" }}>
            <Link to="/forgot-password">Forgot password?</Link>
          </p>
          <button className="btn btn-primary btn-block" disabled={busy}>{busy ? "Logging in…" : "Log In"}</button>
          <p className="muted small center">No account? <Link to="/signup">Sign up</Link></p>
        </form>
      </section>
    </Page>
  );
}