import { useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Page from "../components/Page";
import CountUp from "../components/CountUp";
import { api } from "../api";
import { useApi } from "../useApi";
import { useAuth } from "../AuthContext";

// The coloured scale shown under the result. Widths = size of each BMI range (10 to 40).
const SCALE = [
  { label: "Under", width: 28.3, tone: "info" },
  { label: "Normal", width: 21.7, tone: "good" },
  { label: "Over", width: 16.7, tone: "warn" },
  { label: "Obese", width: 33.3, tone: "bad" },
];

export default function Bmi() {
  const { user } = useAuth();
  const { data: options } = useApi("/bmi/options");
  const [form, setForm] = useState({ height: "", weight: "", age: "", gender: "", activity: "sedentary" });
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);

  // One function handles every input: it updates the field whose `name` matches
  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  async function onSubmit(e) {
    e.preventDefault();
    setError(""); setBusy(true);
    try {
      setResult(await api.post("/bmi", form));
    } catch (err) {
      setError(err.message); setResult(null);
    } finally {
      setBusy(false);
    }
  }

  // Where the marker sits on the scale (BMI 10 = 0%, BMI 40 = 100%)
  const markerLeft = result ? Math.min(100, Math.max(0, ((result.bmi - 10) / 30) * 100)) : 0;

  return (
    <Page>
      <section className="page-hero">
        <div className="container">
          <h1>BMI <span>Calculator</span></h1>
          <p className="muted">Find your Body Mass Index and daily calorie needs.</p>
        </div>
      </section>

      <section className="section-tight">
        <div className="container bmi-grid">
          <form className="card form" onSubmit={onSubmit}>
            {error && <p className="notice notice-error">{error}</p>}
            <div className="form-row">
              <label>Height (cm)*<input type="number" step="0.1" name="height" value={form.height} onChange={onChange} placeholder="e.g. 172" required /></label>
              <label>Weight (kg)*<input type="number" step="0.1" name="weight" value={form.weight} onChange={onChange} placeholder="e.g. 68" required /></label>
            </div>
            <p className="muted small">Optional — fill these to also get your daily calories:</p>
            <div className="form-row">
              <label>Age<input type="number" name="age" min="10" max="100" value={form.age} onChange={onChange} /></label>
              <label>Gender
                <select name="gender" value={form.gender} onChange={onChange}>
                  <option value="">Select</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </label>
            </div>
            <label>Activity level
              <select name="activity" value={form.activity} onChange={onChange}>
                {(options ? options.activityLevels : []).map((a) => <option key={a.value} value={a.value}>{a.label}</option>)}
              </select>
            </label>
            <button className="btn btn-primary btn-block" disabled={busy}>{busy ? "Calculating…" : "Calculate"}</button>

            <AnimatePresence>
              {result && (
                <motion.div
                  key={result.bmi + "-" + result.calories}
                  className={`bmi-result tone-${result.category.tone}`}
                  initial={{ opacity: 0, y: 20, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <p className="muted small">Your BMI</p>
                  <p className="bmi-number"><CountUp to={result.bmi} decimals={1} /></p>
                  <p className="bmi-label">{result.category.label}</p>

                  <div className="scale">
                    {SCALE.map((s) => <div key={s.label} className={`scale-seg tone-bg-${s.tone}`} style={{ width: s.width + "%" }}><span>{s.label}</span></div>)}
                    <motion.div className="scale-marker" initial={{ left: "0%" }} animate={{ left: markerLeft + "%" }} transition={{ type: "spring", stiffness: 60, damping: 14, delay: 0.2 }} />
                  </div>

                  {result.calories && <p className="bmi-cal">About <strong>{result.calories.toLocaleString("en-IN")} kcal/day</strong> to maintain your weight</p>}
                  <p className="muted small">
                    {result.saved ? "✓ Saved to your dashboard" : <><Link to="/signup">Sign up</Link> to save results and track progress</>}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </form>

          <div className="bmi-info">
            <h2 className="h-sm">BMI <span>categories</span></h2>
            <ul className="bmi-list">
              <li className="tone-info"><span>Below 18.5</span> Underweight</li>
              <li className="tone-good"><span>18.5 – 24.9</span> Normal weight</li>
              <li className="tone-warn"><span>25.0 – 29.9</span> Overweight</li>
              <li className="tone-bad"><span>30.0+</span> Obese</li>
            </ul>
            <p className="muted small">
              BMI is a simple screening tool. It does not account for muscle mass, and calorie numbers are estimates
              (Mifflin-St Jeor formula). For personal advice, talk to a trainer or doctor.
            </p>
          </div>
        </div>
      </section>
    </Page>
  );
}
