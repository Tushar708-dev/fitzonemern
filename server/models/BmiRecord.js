// One saved BMI calculation belonging to a user.
const mongoose = require("mongoose");

const bmiRecordSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true, index: true },
    heightCm: { type: Number, required: true },
    weightKg: { type: Number, required: true },
    bmi: { type: Number, required: true },
    category: { type: String, required: true },
    // Optional extras used for the calorie estimate
    age: Number,
    gender: String,
    activity: String,
    maintenanceCalories: Number,
  },
  { timestamps: true }
);

module.exports = mongoose.model("BmiRecord", bmiRecordSchema);
