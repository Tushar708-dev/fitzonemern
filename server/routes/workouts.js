// /api/workouts  ->  the member's workout log (login required)
const express = require("express");
const mongoose = require("mongoose");
const WorkoutLog = require("../models/WorkoutLog");
const { requireAuth } = require("../middleware/auth");

const router = express.Router();
router.use(requireAuth); // every route in this file needs a login

router.get("/", async (req, res, next) => {
  try {
    const logs = await WorkoutLog.find({ user: req.user._id })
      .populate("exercise", "name slug muscleGroup")
      .sort({ date: -1 }).limit(50).lean();
    res.json({ logs });
  } catch (err) { next(err); }
});

router.post("/", async (req, res, next) => {
  try {
    const { exercise, sets, reps, weight, date } = req.body;
    const setsN = parseInt(sets, 10);
    const repsN = parseInt(reps, 10);
    const weightN = parseFloat(weight) || 0;

    if (!mongoose.isValidObjectId(exercise) || !(setsN > 0) || !(repsN > 0) || weightN < 0) {
      return res.status(400).json({ error: "Please choose an exercise and enter valid sets and reps." });
    }
    const log = await WorkoutLog.create({
      user: req.user._id, exercise, sets: setsN, reps: repsN, weightKg: weightN,
      date: date ? new Date(date) : new Date(),
    });
    res.status(201).json({ log });
  } catch (err) { next(err); }
});

// A user can only delete their OWN logs (the `user` filter makes sure of that)
router.delete("/:id", async (req, res, next) => {
  try {
    if (mongoose.isValidObjectId(req.params.id)) {
      await WorkoutLog.deleteOne({ _id: req.params.id, user: req.user._id });
    }
    res.json({ ok: true });
  } catch (err) { next(err); }
});

module.exports = router;
