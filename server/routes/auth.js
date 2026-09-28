// /api/auth  ->  signup, login, logout, "who am I?"
const express = require("express");
const bcrypt = require("bcryptjs");
const rateLimit = require("express-rate-limit");
const User = require("../models/User");

const router = express.Router();

// Only send safe fields to the browser (never the password hash!)
const publicUser = (u) => ({ id: u._id, name: u.name, email: u.email, createdAt: u.createdAt });

// Max 10 login attempts per 15 minutes per IP (slows down password guessing)
const loginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 10,
  standardHeaders: true,
  legacyHeaders: false,
  message: { error: "Too many attempts. Please try again in 15 minutes." },
});

// React calls this on page load to find out if someone is logged in
router.get("/me", (req, res) => {
  res.json({ user: req.user ? publicUser(req.user) : null });
});

router.post("/signup", async (req, res, next) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) return res.status(400).json({ error: "Please fill in every field." });
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return res.status(400).json({ error: "Please enter a valid email." });
    if (password.length < 6) return res.status(400).json({ error: "Password must be at least 6 characters." });
    if (await User.findOne({ email: email.toLowerCase().trim() })) {
      return res.status(409).json({ error: "An account with that email already exists." });
    }

    const passwordHash = await bcrypt.hash(password, 10);
    const user = await User.create({ name, email, passwordHash });

    req.session.userId = user._id.toString(); // this line = "logged in"
    res.status(201).json({ user: publicUser(user) });
  } catch (err) {
    next(err);
  }
});

router.post("/login", loginLimiter, async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email: String(email || "").toLowerCase().trim() });
    const ok = user && (await bcrypt.compare(String(password || ""), user.passwordHash));

    if (!ok) return res.status(401).json({ error: "Incorrect email or password." });

    req.session.userId = user._id.toString();
    res.json({ user: publicUser(user) });
  } catch (err) {
    next(err);
  }
});

router.post("/logout", (req, res) => {
  req.session.destroy(() => res.json({ ok: true }));
});

module.exports = router;
