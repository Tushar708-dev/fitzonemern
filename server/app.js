// Builds the Express app (kept separate from index.js so it is easy to test).
const path = require("path");
const fs = require("fs");
const express = require("express");
const session = require("express-session");
const { attachUser } = require("./middleware/auth");

function createApp({ sessionStore } = {}) {
  const app = express();
  const isProd = process.env.NODE_ENV === "production";

  if (isProd) app.set("trust proxy", 1); // needed behind Render/Railway so secure cookies work

  app.use(express.json());

  app.use(
    session({
      secret: process.env.SESSION_SECRET || "dev-only-secret-change-me",
      resave: false,
      saveUninitialized: false,
      store: sessionStore, // MongoDB in real use
      cookie: { maxAge: 1000 * 60 * 60 * 24 * 7, httpOnly: true, sameSite: "lax", secure: isProd },
    })
  );
  app.use(attachUser);

  // ---- API ----
  app.use("/api/auth", require("./routes/auth"));
  app.use("/api/exercises", require("./routes/exercises"));
  app.use("/api/bmi", require("./routes/bmi"));
  app.use("/api/workouts", require("./routes/workouts"));
  app.use("/api/dashboard", require("./routes/dashboard"));
  app.use("/api/contact", require("./routes/contact"));
  app.use("/api", (req, res) => res.status(404).json({ error: "API route not found." }));

  // ---- Serve the built React app (after `npm run build`) ----
  const dist = path.join(__dirname, "..", "client", "dist");
  if (fs.existsSync(dist)) {
    app.use(express.static(dist));
    app.get("*", (req, res) => res.sendFile(path.join(dist, "index.html"))); // React Router handles the URL
  }

  // ---- Error handler ----
  app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).json({ error: "Something went wrong on our side. Please try again." });
  });

  return app;
}

module.exports = createApp;
