// /api/bmi  ->  calculate BMI (+ calories). Logged-in users also get the result saved.
const express = require("express");
const BmiRecord = require("../models/BmiRecord");
const { calculateBmi, bmiCategory, maintenanceCalories, ACTIVITY_LEVELS } = require("../lib/health");

const router = express.Router();

// The activity-level dropdown options for the form
router.get("/options", (req, res) => {
  const activityLevels = Object.entries(ACTIVITY_LEVELS).map(([value, a]) => ({ value, label: a.label }));
  res.json({ activityLevels });
});

router.post("/", async (req, res, next) => {
  try {
    const heightCm = parseFloat(req.body.height);
    const weightKg = parseFloat(req.body.weight);
    const age = parseInt(req.body.age, 10);
    const { gender, activity } = req.body;

    if (!(heightCm > 50 && heightCm < 272) || !(weightKg > 10 && weightKg < 500)) {
      return res.status(400).json({ error: "Please enter a realistic height (cm) and weight (kg)." });
    }

    const bmi = calculateBmi(heightCm, weightKg);
    const category = bmiCategory(bmi);

    // Calories are optional: only worked out if age + gender were given
    let calories = null;
    if (age > 0 && (gender === "male" || gender === "female")) {
      calories = maintenanceCalories({ weightKg, heightCm, age, gender, activity });
    }

    let saved = false;
    if (req.user) {
      await BmiRecord.create({
        user: req.user._id, heightCm, weightKg, bmi, category: category.label,
        age: age || undefined, gender: gender || undefined, activity: activity || undefined,
        maintenanceCalories: calories || undefined,
      });
      saved = true;
    }

    res.json({ bmi, category, calories, saved });
  } catch (err) { next(err); }
});

module.exports = router;
