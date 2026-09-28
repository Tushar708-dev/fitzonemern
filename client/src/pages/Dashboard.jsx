import { Link } from "react-router-dom";
import Page from "../components/Page";
import Reveal from "../components/Reveal";
import CountUp from "../components/CountUp";
import { useApi } from "../useApi";
import { useAuth } from "../AuthContext";

const fmt = (d) => new Date(d).toLocaleDateString("en-GB");

export default function Dashboard() {
  const { user } = useAuth();
  const { data, loading, error } = useApi("/dashboard");

  return (
    <Page>
      <section className="page-hero">
        <div className="container">
          <h1>My <span>Dashboard</span></h1>
          <p className="muted">Welcome back, {user.name}</p>
        </div>
      </section>

      <section className="section-tight">
        <div className="container">
          {error && <p className="notice notice-error">{error}</p>}
          {loading && <div className="skeleton skeleton-row" />}

          {data && (
            <>
              <div className="grid grid-4 stat-cards">
                <Reveal><div className="stat-card"><strong><CountUp to={data.totalWorkouts} /></strong><span>Total workouts</span></div></Reveal>
                <Reveal delay={0.08}><div className="stat-card"><strong><CountUp to={data.workoutsThisWeek} /></strong><span>This week</span></div></Reveal>
                <Reveal delay={0.16}><div className="stat-card"><strong>{data.latestBmi ? <CountUp to={data.latestBmi.bmi} decimals={1} /> : "--"}</strong><span>{data.latestBmi ? `Latest BMI (${data.latestBmi.category})` : "No BMI yet"}</span></div></Reveal>
                <Reveal delay={0.24}><div className="stat-card"><strong>{data.latestBmi && data.latestBmi.maintenanceCalories ? <CountUp to={data.latestBmi.maintenanceCalories} /> : "--"}</strong><span>Maintenance kcal/day</span></div></Reveal>
              </div>

              <div className="quick-actions">
                <Link to="/workouts" className="btn btn-primary">Log Workout</Link>
                <Link to="/bmi" className="btn btn-outline">New BMI Check</Link>
                <Link to="/exercises" className="btn btn-outline">Watch Tutorials</Link>
              </div>

              <Reveal><h2 className="h-sm">Recent <span>workouts</span></h2></Reveal>
              {data.recentWorkouts.length === 0 ? (
                <p className="empty">No workouts yet. <Link to="/workouts">Log your first workout</Link>.</p>
              ) : (
                <ul className="log-list">
                  {data.recentWorkouts.map((l) => (
                    <li key={l._id} className="log-row">
                      <div><strong>{l.exercise ? l.exercise.name : "Removed exercise"}</strong><span className="muted small">{fmt(l.date)}</span></div>
                      <div className="log-stats"><span>{l.sets} × {l.reps}</span><span>{l.weightKg ? l.weightKg + " kg" : "Bodyweight"}</span></div>
                    </li>
                  ))}
                </ul>
              )}

              <Reveal><h2 className="h-sm history-title">BMI <span>history</span></h2></Reveal>
              {data.bmiHistory.length === 0 ? (
                <p className="empty">No BMI records yet. <Link to="/bmi">Calculate your BMI</Link>.</p>
              ) : (
                <ul className="log-list">
                  {data.bmiHistory.map((r) => (
                    <li key={r._id} className="log-row">
                      <div><strong>BMI {r.bmi} — {r.category}</strong><span className="muted small">{fmt(r.createdAt)}</span></div>
                      <div className="log-stats"><span>{r.heightCm} cm</span><span>{r.weightKg} kg</span></div>
                    </li>
                  ))}
                </ul>
              )}
            </>
          )}
        </div>
      </section>
    </Page>
  );
}
