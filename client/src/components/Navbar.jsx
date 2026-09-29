import { useEffect, useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../AuthContext";

export default function Navbar() {
  const { user, logout } = useAuth();
  const [open, setOpen] = useState(false);        // is the mobile menu open?
  const [scrolled, setScrolled] = useState(false); // has the page been scrolled?
  const location = useLocation();
  const navigate = useNavigate();

  // Make the navbar solid once you scroll down a little
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu whenever the page changes
  useEffect(() => setOpen(false), [location.pathname]);

  // Stop the page behind the menu from scrolling while it is open
  useEffect(() => {
    document.body.classList.toggle("no-scroll", open);
    return () => document.body.classList.remove("no-scroll");
  }, [open]);

  async function handleLogout() {
    await logout();
    navigate("/");
  }

  return (
    <>
      <header className={`navbar ${scrolled ? "navbar-solid" : ""}`}>
        <div className="container nav-inner">
          <Link to="/" className="logo">FIT<span>ZONE</span></Link>

          <button className={`hamburger ${open ? "is-open" : ""}`} onClick={() => setOpen(!open)} aria-label="Toggle menu" aria-expanded={open}>
            <span /><span /><span />
          </button>
        </div>
      </header>

      {/* Rendered as a sibling of <header>, NOT inside it — a backdrop-filter/transform on an
          ancestor breaks position:fixed children in Safari, so this must stay outside .navbar. */}
      <nav className={`nav-links ${open ? "open" : ""}`}>
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/exercises">Exercises</NavLink>
        <NavLink to="/bmi">BMI</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        {user ? (
          <>
            <NavLink to="/workouts">My Workouts</NavLink>
            <NavLink to="/dashboard">Dashboard</NavLink>
            <button className="btn btn-outline btn-sm" onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <>
            <NavLink to="/login">Log In</NavLink>
            <Link to="/signup" className="btn btn-primary btn-sm">Sign Up</Link>
          </>
        )}
      </nav>
    </>
  );
}