// /api/exercises  ->  the Video Tutorials data
const express = require("express");
const Exercise = require("../models/Exercise");

const router = express.Router();

// All exercises (React filters them by muscle group in the browser)
router.get("/", async (req, res, next) => {
  try {
    const exercises = await Exercise.find().sort({ muscleGroup: 1, name: 1 }).lean();
    res.json({ exercises });
  } catch (err) { next(err); }
});

// One exercise + a few related ones from the same muscle group
router.get("/:slug", async (req, res, next) => {
  try {
    const exercise = await Exercise.findOne({ slug: req.params.slug }).lean();
    if (!exercise) return res.status(404).json({ error: "Exercise not found." });

    const related = await Exercise.find({ muscleGroup: exercise.muscleGroup, slug: { $ne: exercise.slug } })
      .limit(3).lean();
    res.json({ exercise, related });
  } catch (err) { next(err); }
});

module.exports = router;
