import { useState } from "react";
import Page from "../components/Page";
import Reveal from "../components/Reveal";
import { api } from "../api";

const EMPTY = { firstName: "", lastName: "", email: "", phone: "", interest: "", message: "" };

export default function Contact() {
  const [form, setForm] = useState(EMPTY);
  const [status, setStatus] = useState({ type: "", text: "" });
  const [busy, setBusy] = useState(false);
  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  async function onSubmit(e) {
    e.preventDefault();
    setBusy(true);
    try {
      await api.post("/contact", form);
      setStatus({ type: "success", text: "Thanks! We received your message and will get back to you soon." });
      setForm(EMPTY);
    } catch (err) {
      setStatus({ type: "error", text: err.message });
    } finally {
      setBusy(false);
    }
  }

  return (
    <Page>
      <section className="page-hero">
        <div className="container">
          <h1>Contact <span>Us</span></h1>
          <p className="muted">Get in touch and start your fitness journey today.</p>
        </div>
      </section>

      <section className="section-tight">
        <div className="container contact-grid">
          <Reveal>
            <form className="card form" onSubmit={onSubmit}>
              <h3>Send us a message</h3>
              {status.text && <p className={`notice notice-${status.type}`}>{status.text}</p>}
              <div className="form-row">
                <label>First name*<input name="firstName" value={form.firstName} onChange={onChange} required /></label>
                <label>Last name*<input name="lastName" value={form.lastName} onChange={onChange} required /></label>
              </div>
              <div className="form-row">
                <label>Email*<input type="email" name="email" value={form.email} onChange={onChange} required /></label>
                <label>Phone<input type="tel" name="phone" value={form.phone} onChange={onChange} /></label>
              </div>
              <label>I'm interested in
                <select name="interest" value={form.interest} onChange={onChange}>
                  <option value="">Select an option</option>
                  <option>Gym Membership</option>
                  <option>Personal Training</option>
                  <option>Group Classes</option>
                  <option>Nutrition Counseling</option>
                  <option>Free Day Pass</option>
                  <option>Other</option>
                </select>
              </label>
              <label>Message*<textarea name="message" rows="5" value={form.message} onChange={onChange} required /></label>
              <button className="btn btn-primary" disabled={busy}>{busy ? "Sending…" : "Send Message"}</button>
            </form>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="card info-card">
              <h3>Get in touch</h3>
              <p><strong>📍 Location</strong><br />123 Fitness Street, Jaipur, Rajasthan</p>
              <p><strong>📞 Phone</strong><br />(555) 123-4567</p>
              <p><strong>✉️ Email</strong><br />info@fitzone.com</p>
              <p><strong>🕐 Hours</strong><br />Mon – Fri: 5:00 AM – 11:00 PM<br />Sat – Sun: 6:00 AM – 10:00 PM</p>
            </div>
          </Reveal>
        </div>
      </section>
    </Page>
  );
}
