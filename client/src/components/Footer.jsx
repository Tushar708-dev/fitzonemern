import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <div className="logo">FIT<span>ZONE</span></div>
          <p className="muted">Your journey to a healthier, stronger you starts here.</p>
        </div>
        <div>
          <h4>Explore</h4>
          <Link to="/exercises">Exercise Tutorials</Link>
          <Link to="/bmi">BMI Calculator</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <div>
          <h4>Hours</h4>
          <p className="muted">Mon - Fri: 5:00 AM - 11:00 PM</p>
          <p className="muted">Sat - Sun: 6:00 AM - 10:00 PM</p>
        </div>
        <div>
          <h4>Contact</h4>
          <p className="muted">📍 123 Fitness Street, Jaipur</p>
          <p className="muted">📞 (555) 123-4567</p>
          <p className="muted">✉️ info@fitzone.com</p>
        </div>
      </div>
      <p className="footer-bottom muted">&copy; {new Date().getFullYear()} FitZone. All rights reserved.</p>
    </footer>
  );
}
