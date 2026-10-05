// /api/auth  ->  signup, login, logout, "who am I?", forgot/reset password
const crypto = require("crypto");
const express = require("express");
const bcrypt = require("bcryptjs");
const rateLimit = require("express-rate-limit");
const User = require("../models/User");
const { sendPasswordResetEmail } = require("../lib/email");

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

// Max 5 reset-password requests per hour per IP (someone could otherwise spam emails)
const forgotPasswordLimiter = rateLimit({
  windowMs: 60 * 60 * 1000,
  max: 5,
  standardHeaders: true,
  legacyHeaders: false,
  message: { error: "Too many requests. Please try again later." },
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

// ---------- Forgot password (step 1: request the email) ----------
router.post("/forgot-password", forgotPasswordLimiter, async (req, res, next) => {
  try {
    const email = String(req.body.email || "").toLowerCase().trim();
    const user = await User.findOne({ email });

    // IMPORTANT: always send the same success response, whether or not the email
    // exists. Otherwise an attacker could use this endpoint to find out which
    // emails are registered on the site.
    const genericResponse = { ok: true, message: "If that email has an account, we've sent a reset link." };

    if (!user) return res.json(genericResponse);

    // Make a random token. We email the RAW token to the user, but only store its
    // HASH in the database — so a database leak alone can never be used to reset
    // someone's password (the attacker would still need the raw token from the email).
    const rawToken = crypto.randomBytes(32).toString("hex");
    user.resetTokenHash = crypto.createHash("sha256").update(rawToken).digest("hex");
    user.resetTokenExpires = new Date(Date.now() + 60 * 60 * 1000); // 1 hour
    await user.save();

    const appUrl = process.env.APP_URL || "http://localhost:5173";
    const resetUrl = `${appUrl}/reset-password/${rawToken}`;

    try {
      await sendPasswordResetEmail(user.email, resetUrl);
    } catch (emailErr) {
      // Don't leak email-provider errors to the client, but do log them so you can debug.
      console.error("❌ Failed to send reset email:", emailErr.message);
    }

    res.json(genericResponse);
  } catch (err) {
    next(err);
  }
});

// ---------- Forgot password (step 2: user clicks the link and sets a new password) ----------
router.post("/reset-password/:token", async (req, res, next) => {
  try {
    const { password } = req.body;
    if (!password || password.length < 6) {
      return res.status(400).json({ error: "Password must be at least 6 characters." });
    }

    const tokenHash = crypto.createHash("sha256").update(req.params.token).digest("hex");
    const user = await User.findOne({
      resetTokenHash: tokenHash,
      resetTokenExpires: { $gt: new Date() }, // must not be expired
    });

    if (!user) {
      return res.status(400).json({ error: "This reset link is invalid or has expired. Please request a new one." });
    }

    user.passwordHash = await bcrypt.hash(password, 10);
    user.resetTokenHash = null;
    user.resetTokenExpires = null;
    await user.save();

    res.json({ ok: true, message: "Password updated. You can now log in." });
  } catch (err) {
    next(err);
  }
});

module.exports = router;