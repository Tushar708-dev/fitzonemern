// Loads server/data/exercises.js into MongoDB.  Run:  npm run seed
// Safe to run again and again: it updates existing exercises instead of duplicating them.
require("dotenv").config();
const mongoose = require("mongoose");
const connectDB = require("./config/db");
const Exercise = require("./models/Exercise");
const exercises = require("./data/exercises");
const { parseYouTube } = require("./lib/video");

const makeSlug = (name) => name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

async function seed() {
  await connectDB();
  const slugs = [];

  for (const ex of exercises) {
    const slug = makeSlug(ex.name);
    slugs.push(slug);
    const { videoId, videoStart } = parseYouTube(ex.video);

    await Exercise.updateOne(
      { slug },
      { $set: {
          name: ex.name, slug, muscleGroup: ex.group, equipment: ex.equipment,
          difficulty: ex.level, description: ex.description,
          steps: ex.steps, tips: ex.tips, videoId, videoStart,
      } },
      { upsert: true }
    );
  }

  // Remove old exercises that are no longer in the data file
  const removed = await Exercise.deleteMany({ slug: { $nin: slugs } });
  const withVideo = exercises.filter((e) => parseYouTube(e.video).videoId).length;
  console.log(`🌱 Seeded ${exercises.length} exercises (${withVideo} with video, ${removed.deletedCount} old removed)`);
  await mongoose.disconnect();
}

seed();
