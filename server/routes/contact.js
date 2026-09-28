// /api/contact  ->  saves messages from the Contact page into MongoDB
const express = require("express");
const ContactMessage = require("../models/ContactMessage");

const router = express.Router();

router.post("/", async (req, res, next) => {
  try {
    const { firstName, lastName, email, phone, interest, message } = req.body;
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email || "");

    if (!firstName || !lastName || !message || !emailOk) {
      return res.status(400).json({ error: "Please fill in your name, a valid email and a message." });
    }
    await ContactMessage.create({ firstName, lastName, email, phone, interest, message });
    res.status(201).json({ ok: true });
  } catch (err) { next(err); }
});

module.exports = router;
