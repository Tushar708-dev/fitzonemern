// A registered member. Passwords are stored ONLY as bcrypt hashes.
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, unique: true, lowercase: true, trim: true },
    passwordHash: { type: String, required: true },

    // Forgot-password flow: we store a HASH of the reset token (never the raw token),
    // so even if the database leaks, nobody can reset anyone's password with it.
    resetTokenHash: { type: String, default: null },
    resetTokenExpires: { type: Date, default: null },
  },
  { timestamps: true } // adds createdAt + updatedAt automatically
);

module.exports = mongoose.model("User", userSchema);