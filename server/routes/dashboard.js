// /api/dashboard  ->  everything the dashboard page needs in one request
const express = require("express");
const BmiRecord = require("../models/BmiRecord");
const WorkoutLog = require("../models/WorkoutLog");
const { requireAuth } = require("../middleware/auth");

const router = express.Router();

router.get("/", requireAuth, async (req, res, next) => {
  try {
    const weekAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);

    const [bmiHistory, recentWorkouts, totalWorkouts, workoutsThisWeek] = await Promise.all([
      BmiRecord.find({ user: req.user._id }).sort({ createdAt: -1 }).limit(10).lean(),
      WorkoutLog.find({ user: req.user._id }).populate("exercise", "name slug muscleGroup").sort({ date: -1 }).limit(5).lean(),
      WorkoutLog.countDocuments({ user: req.user._id }),
      WorkoutLog.countDocuments({ user: req.user._id, date: { $gte: weekAgo } }),
    ]);

    res.json({ bmiHistory, recentWorkouts, totalWorkouts, workoutsThisWeek, latestBmi: bmiHistory[0] || null });
  } catch (err) { next(err); }
});

module.exports = router;
