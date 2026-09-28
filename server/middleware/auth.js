const User = require("../models/User");

// Runs on EVERY request. If the visitor has a login session, it loads the user into req.user.
async function attachUser(req, res, next) {
  req.user = null;
  if (req.session && req.session.userId) {
    try {
      req.user = await User.findById(req.session.userId).lean();
    } catch (err) {
      console.error("attachUser error:", err.message);
    }
  }
  next();
}

// Put this in front of any API route that needs a login.
function requireAuth(req, res, next) {
  if (!req.user) return res.status(401).json({ error: "Please log in to continue." });
  next();
}

module.exports = { attachUser, requireAuth };
