// An exercise shown in the Video Tutorials tab. Filled by `npm run seed`.
const mongoose = require("mongoose");

const exerciseSchema = new mongoose.Schema({
  name: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  muscleGroup: { type: String, required: true }, // Chest, Back, Legs...
  equipment: { type: String, required: true },
  difficulty: { type: String, enum: ["Beginner", "Intermediate", "Advanced"], required: true },
  description: { type: String, required: true },
  steps: [String],
  tips: [String],
  // YouTube video id (the part after ?v=). Leave empty to show a YouTube search button instead.
  videoId: { type: String, default: "" },
  videoStart: { type: Number, default: 0 }, // start time in seconds
});

module.exports = mongoose.model("Exercise", exerciseSchema);
