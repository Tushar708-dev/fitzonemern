// Starts the server: connects to MongoDB, then listens for requests.
require("dotenv").config();
const MongoStore = require("connect-mongo");
const connectDB = require("./config/db");
const createApp = require("./app");

const PORT = process.env.PORT || 3000;

async function start() {
  await connectDB();
  // Sessions live in MongoDB, so people stay logged in even after a server restart.
  const sessionStore = MongoStore.create({ mongoUrl: process.env.MONGODB_URI });
  createApp({ sessionStore }).listen(PORT, () => console.log(`🏋️ FitZone running at http://localhost:${PORT}`));
}

start();
