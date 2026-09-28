import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Page from "../components/Page";
import ExerciseCard from "../components/ExerciseCard";
import { useApi } from "../useApi";
import { GROUPS } from "../constants";

export default function Exercises() {
  const { data, loading, error } = useApi("/exercises");
  const [params, setParams] = useSearchParams();
  const [search, setSearch] = useState("");

  const group = params.get("group") || "All"; // the selected body part lives in the URL: /exercises?group=Chest
  const all = data ? data.exercises : [];

  // Keep only exercises that match the body part AND the search box
  const shown = all.filter(
    (e) => (group === "All" || e.muscleGroup === group) && e.name.toLowerCase().includes(search.toLowerCase())
  );

  const countFor = (name) => (name === "All" ? all.length : all.filter((e) => e.muscleGroup === name).length);

  function pickGroup(name) {
    setParams(name === "All" ? {} : { group: name }, { replace: true });
  }

  return (
    <Page>
      <section className="page-hero">
        <div className="container">
          <h1>Exercise <span>Video Tutorials</span></h1>
          <p className="muted">Learn proper form for every major exercise, for every body part.</p>
          <input
            className="search-box"
            type="search"
            placeholder="Search exercises (e.g. squat, curl, plank)…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </section>

      {/* Sticky filter bar: swipe sideways on mobile */}
      <div className="filter-bar">
        <div className="container filter-scroll">
          {[{ name: "All", emoji: "✨" }, ...GROUPS].map((g) => (
            <button key={g.name} className={`chip ${group === g.name ? "chip-active" : ""}`} onClick={() => pickGroup(g.name)}>
              {g.emoji} {g.name} <small>{countFor(g.name)}</small>
            </button>
          ))}
        </div>
      </div>

      <section className="section-tight">
        <div className="container">
          {error && <p className="notice notice-error">{error}</p>}

          {loading && (
            <div className="exercise-grid">
              {Array.from({ length: 8 }).map((_, i) => <div key={i} className="skeleton" />)}
            </div>
          )}

          {!loading && !error && all.length === 0 && (
            <p className="empty">No exercises found. Run <code>npm run seed</code> to load them into the database.</p>
          )}

          {!loading && all.length > 0 && (
            <>
              <motion.p layout className="result-count muted">{shown.length} exercise{shown.length === 1 ? "" : "s"}</motion.p>
              <motion.div layout className="exercise-grid">
                <AnimatePresence mode="popLayout">
                  {shown.map((ex) => <ExerciseCard key={ex.slug} exercise={ex} />)}
                </AnimatePresence>
              </motion.div>
              {shown.length === 0 && <p className="empty">Nothing matches “{search}”. Try another word.</p>}
            </>
          )}
        </div>
      </section>
    </Page>
  );
}
