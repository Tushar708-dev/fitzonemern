// Messages sent from the Contact page.
const mongoose = require("mongoose");

const contactMessageSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true, trim: true },
    lastName: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true, lowercase: true },
    phone: { type: String, trim: true },
    interest: { type: String, trim: true },
    message: { type: String, required: true, trim: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("ContactMessage", contactMessageSchema);
