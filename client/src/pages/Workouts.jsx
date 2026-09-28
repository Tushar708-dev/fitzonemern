import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Page from "../components/Page";
import { api } from "../api";
import { useApi } from "../useApi";
import { GROUPS } from "../constants";

const today = () => new Date().toISOString().slice(0, 10);

export default function Workouts() {
  const [reload, setReload] = useState(0); // change this number to re-fetch the log list
  const { data: exData } = useApi("/exercises");
  const { data: logData, loading } = useApi("/workouts", reload);

  const [form, setForm] = useState({ exercise: "", sets: "", reps: "", weight: "", date: today() });
  const [message, setMessage] = useState({ type: "", text: "" });

  const exercises = exData ? exData.exercises : [];
  const logs = logData ? logData.logs : [];
  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  async function onSubmit(e) {
    e.preventDefault();
    try {
      await api.post("/workouts", form);
      setMessage({ type: "success", text: "Workout logged. Nice work! 💪" });
      setForm({ ...form, sets: "", reps: "", weight: "" });
      setReload(reload + 1);
    } catch (err) {
      setMessage({ type: "error", text: err.message });
    }
  }

  async function remove(id) {
    if (!window.confirm("Delete this entry?")) return;
    await api.del(`/workouts/${id}`);
    setReload(reload + 1);
  }

  return (
    <Page>
      <section className="page-hero">
        <div className="container">
          <h1>My <span>Workouts</span></h1>
          <p className="muted">Log your sets and watch your strength grow.</p>
        </div>
      </section>

      <section className="section-tight">
        <div className="container narrow">
          <form className="card form" onSubmit={onSubmit}>
            <h3>Log a workout</h3>
            {message.text && <p className={`notice notice-${message.type}`}>{message.text}</p>}

            <label>Exercise*
              <select name="exercise" value={form.exercise} onChange={onChange} required>
                <option value="">Choose an exercise</option>
                {GROUPS.map((g) => (
                  <optgroup key={g.name} label={g.name}>
                    {exercises.filter((x) => x.muscleGroup === g.name).map((x) => <option key={x._id} value={x._id}>{x.name}</option>)}
                  </optgroup>
                ))}
              </select>
            </label>
            <div className="form-row form-row-3">
              <label>Sets*<input type="number" name="sets" min="1" value={form.sets} onChange={onChange} required /></label>
              <label>Reps*<input type="number" name="reps" min="1" value={form.reps} onChange={onChange} required /></label>
              <label>Weight (kg)<input type="number" step="0.5" min="0" name="weight" value={form.weight} onChange={onChange} placeholder="0 = bodyweight" /></label>
            </div>
            <label>Date<input type="date" name="date" value={form.date} onChange={onChange} /></label>
            <button className="btn btn-primary">Save Workout</button>
          </form>

          <h2 className="h-sm history-title">Workout <span>history</span></h2>
          {loading && <div className="skeleton skeleton-row" />}
          {!loading && logs.length === 0 && <p className="empty">No workouts logged yet. Add your first one above!</p>}
          <ul className="log-list">
            <AnimatePresence initial={false}>
              {logs.map((l) => (
                <motion.li key={l._id} layout initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 40 }} className="log-row">
                  <div>
                    <strong>{l.exercise ? l.exercise.name : "Removed exercise"}</strong>
                    <span className="muted small">{new Date(l.date).toLocaleDateString("en-GB")}</span>
                  </div>
                  <div className="log-stats">
                    <span>{l.sets} × {l.reps}</span>
                    <span>{l.weightKg ? l.weightKg + " kg" : "Bodyweight"}</span>
                    <button className="btn-delete" onClick={() => remove(l._id)} aria-label="Delete">✕</button>
                  </div>
                </motion.li>
              ))}
            </AnimatePresence>
          </ul>
        </div>
      </section>
    </Page>
  );
}
