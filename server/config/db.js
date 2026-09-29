// Connects to MongoDB using the MONGODB_URI from your .env file.
const mongoose = require("mongoose");

async function connectDB() {
  const uri = process.env.MONGODB_URI;
  if (!uri) {
    console.error("❌ MONGODB_URI is missing. Copy .env.example to .env and fill it in.");
    process.exit(1);
  }
  try {
    // If MongoDB can't be reached, fail within 8 seconds instead of hanging
    // (a long hang here is what makes Render's port scan time out with no clue why).
    await mongoose.connect(uri, { serverSelectionTimeoutMS: 8000 });
    console.log("✅ MongoDB connected");
  } catch (err) {
    console.error("❌ MongoDB connection failed:", err.message);
    process.exit(1);
  }
}

module.exports = connectDB;