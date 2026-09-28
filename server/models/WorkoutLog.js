// One logged set-group, e.g. "Bench Press 3 x 10 @ 40kg".
const mongoose = require("mongoose");

const workoutLogSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true, index: true },
    exercise: { type: mongoose.Schema.Types.ObjectId, ref: "Exercise", required: true },
    sets: { type: Number, required: true, min: 1 },
    reps: { type: Number, required: true, min: 1 },
    weightKg: { type: Number, default: 0, min: 0 },
    date: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

module.exports = mongoose.model("WorkoutLog", workoutLogSchema);
