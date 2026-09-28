import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import Page from "../components/Page";
import Reveal from "../components/Reveal";
import CountUp from "../components/CountUp";
import { GROUPS } from "../constants";
import { useAuth } from "../AuthContext";

// ---- Page content lives here as simple lists, so it is easy to edit ----
const HERO_WORDS = ["UNLEASH", "YOUR", "POTENTIAL"];

const STATS = [
  { to: 5000, suffix: "+", label: "Active Members" },
  { to: 72, suffix: "", label: "Exercise Tutorials" },
  { to: 12, suffix: "", label: "Body Parts Covered" },
];

const FEATURES = [
  { icon: "🎥", title: "Video Tutorials", text: "Learn proper form for every major exercise, body part by body part." },
  { icon: "📊", title: "BMI + Calories", text: "Check your BMI and daily calorie needs, and track how they change." },
  { icon: "📝", title: "Workout Log", text: "Log sets, reps and weights and watch your progress add up." },
  { icon: "🏆", title: "Expert Trainers", text: "Certified coaches for personal training and group classes." },
];

const PLANS = [
  { name: "Basic", price: "₹999", items: ["Gym access", "Basic equipment", "Locker room"] },
  { name: "Premium", price: "₹1,999", items: ["24/7 gym access", "All equipment", "Unlimited classes", "1 PT session / month"], featured: true },
  { name: "Elite", price: "₹3,499", items: ["Everything in Premium", "4 PT sessions / month", "Nutrition plan", "Priority booking"] },
];

const STORIES = [
  { text: "Lost 12 kg in 5 months. The video tutorials fixed my squat form completely.", name: "Sarah J.", since: "Member since 2023" },
  { text: "Best gym app I have used. Logging workouts keeps me consistent.", name: "Mike C.", since: "Member since 2022" },
  { text: "The trainers are amazing and the BMI tracker keeps me honest.", name: "Emma D.", since: "Member since 2023" },
];

// Scrolling ticker of body parts (list is repeated so the loop never has a gap)
function Marquee() {
  const names = GROUPS.map((g) => g.name.toUpperCase());
  const loop = [...names, ...names, ...names, ...names];
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {loop.map((n, i) => <span key={i}>{n} <b>✦</b></span>)}
      </div>
    </div>
  );
}

export default function Home() {
  const { user } = useAuth();

  // Parallax: as you scroll down, the background blobs move slower than the text
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const blobA = useTransform(scrollYProgress, [0, 1], [0, 220]);
  const blobB = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const fade = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  return (
    <Page>
      {/* ───────── HERO ───────── */}
      <section className="hero" ref={heroRef}>
        <motion.div className="blob blob-a" style={{ y: blobA }} />
        <motion.div className="blob blob-b" style={{ y: blobB }} />

        <motion.div className="container hero-content" style={{ y: textY, opacity: fade }}>
          <motion.p className="eyebrow" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }}>
            TRAIN SMARTER • LIFT BETTER
          </motion.p>

          <h1 className="hero-title">
            {HERO_WORDS.map((word, i) => (
              <span className="word-mask" key={word}>
                <motion.span
                  className={i === 2 ? "word accent" : "word"}
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.8, delay: 0.15 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                >
                  {word}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p className="hero-sub" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}>
            72 exercise tutorials, a BMI calculator and a workout log — everything you need in one place.
          </motion.p>

          <motion.div className="hero-buttons" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.75 }}>
            <Link to="/exercises" className="btn btn-primary">Watch Tutorials</Link>
            <Link to={user ? "/workouts" : "/signup"} className="btn btn-outline">{user ? "Log a Workout" : "Join Free"}</Link>
          </motion.div>

          <motion.div className="stats" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}>
            {STATS.map((s) => (
              <div key={s.label}>
                <strong><CountUp to={s.to} suffix={s.suffix} /></strong>
                <span>{s.label}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>

        <div className="scroll-hint" aria-hidden="true"><span /></div>
      </section>

      <Marquee />

      {/* ───────── TRAIN BY BODY PART ───────── */}
      <section className="section">
        <div className="container">
          <Reveal>
            <h2 className="section-title">Train by <span>body part</span></h2>
            <p className="section-sub">Swipe or scroll — pick a muscle group and see every exercise for it.</p>
          </Reveal>
        </div>
        <div className="container">
          <div className="group-scroller">
            {GROUPS.map((g, i) => (
              <Reveal key={g.name} delay={Math.min(i, 5) * 0.06} y={30} className="group-slot">
                <Link to={`/exercises?group=${g.name}`} className="group-card">
                  <span className="group-emoji">{g.emoji}</span>
                  <h3>{g.name}</h3>
                  <p>{g.blurb}</p>
                  <span className="group-arrow">→</span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── WHY FITZONE ───────── */}
      <section className="section section-alt">
        <div className="container">
          <Reveal><h2 className="section-title">Why <span>FitZone</span></h2></Reveal>
          <div className="grid grid-4">
            {FEATURES.map((f, i) => (
              <Reveal key={f.title} delay={i * 0.08}>
                <div className="card feature">
                  <div className="feature-icon">{f.icon}</div>
                  <h3>{f.title}</h3>
                  <p className="muted">{f.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── PLANS ───────── */}
      <section className="section">
        <div className="container">
          <Reveal><h2 className="section-title">Membership <span>plans</span></h2></Reveal>
          <div className="grid grid-3">
            {PLANS.map((p, i) => (
              <Reveal key={p.name} delay={i * 0.1}>
                <div className={`card plan ${p.featured ? "plan-featured" : ""}`}>
                  {p.featured && <span className="plan-badge">Most Popular</span>}
                  <h3>{p.name}</h3>
                  <div className="price">{p.price}<small>/month</small></div>
                  <ul>{p.items.map((it) => <li key={it}>✓ {it}</li>)}</ul>
                  <Link to="/contact" className={`btn ${p.featured ? "btn-primary" : "btn-outline"}`}>Get Started</Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── SUCCESS STORIES ───────── */}
      <section className="section section-alt">
        <div className="container">
          <Reveal><h2 className="section-title">Success <span>stories</span></h2></Reveal>
          <div className="grid grid-3">
            {STORIES.map((s, i) => (
              <Reveal key={s.name} delay={i * 0.1}>
                <div className="card story">
                  <p>“{s.text}”</p>
                  <strong>{s.name}</strong>
                  <span className="muted">{s.since}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── CALL TO ACTION ───────── */}
      <section className="section">
        <div className="container">
          <Reveal>
            <div className="cta">
              <h2>Ready to transform your life?</h2>
              <p>Create your free account, check your BMI and start logging workouts today.</p>
              <Link to={user ? "/bmi" : "/signup"} className="btn btn-primary btn-lg">{user ? "Check Your BMI" : "Get Started Free"}</Link>
            </div>
          </Reveal>
        </div>
      </section>
    </Page>
  );
}
