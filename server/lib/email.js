// Sends emails using nodemailer. Configured for Gmail SMTP by default (easiest for a
// student project), but any SMTP provider works if you change the transporter settings.
//
// Needs these in your .env:
//   EMAIL_USER   - the Gmail address that sends the email
//   EMAIL_PASS   - a Gmail "App Password" (NOT your normal Gmail password — see guide)
//   APP_URL      - the website's own URL, e.g. http://localhost:5173 in dev,
//                  or https://fitzonemern.onrender.com in production (used to build the reset link)

const nodemailer = require("nodemailer");

function getTransporter() {
  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    throw new Error("EMAIL_USER / EMAIL_PASS are missing from your .env file.");
  }
  return nodemailer.createTransport({
    service: "gmail",
    auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS },
  });
}

async function sendPasswordResetEmail(toEmail, resetUrl) {
  const transporter = getTransporter();

  await transporter.sendMail({
    from: `"FitZone" <${process.env.EMAIL_USER}>`,
    to: toEmail,
    subject: "Reset your FitZone password",
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 480px; margin: 0 auto;">
        <h2 style="color: #ff5a3c;">FitZone</h2>
        <p>We received a request to reset your password. Click the button below to choose a new one:</p>
        <p style="text-align: center; margin: 28px 0;">
          <a href="${resetUrl}"
             style="background: #ff5a3c; color: #fff; padding: 12px 24px; border-radius: 8px;
                    text-decoration: none; font-weight: bold; display: inline-block;">
            Reset Password
          </a>
        </p>
        <p style="color: #666; font-size: 13px;">This link works for 1 hour. If you didn't ask for this, you can safely ignore this email — your password will stay the same.</p>
        <p style="color: #999; font-size: 12px;">If the button doesn't work, copy this link: <br>${resetUrl}</p>
      </div>
    `,
  });
}

module.exports = { sendPasswordResetEmail };