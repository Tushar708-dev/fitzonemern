import { useEffect, useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../AuthContext";

export default function Navbar() {
  const { user, logout } = useAuth();

  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.classList.toggle("no-scroll", open);

    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [open]);

  async function handleLogout() {
    try {
      await logout();
      navigate("/");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  }

  function toggleMenu() {
    setOpen((prev) => !prev);
  }

  return (
    <header className={`navbar ${scrolled ? "navbar-solid" : ""}`}>
      <div className="container nav-inner">
        <Link to="/" className="logo" aria-label="FITZONE Home">
          FIT<span>ZONE</span>
        </Link>

        <nav
          id="main-navigation"
          className={`nav-links ${open ? "open" : ""}`}
          aria-label="Main navigation"
        >
          <NavLink to="/" end>
            Home
          </NavLink>

          <NavLink to="/exercises">
            Exercises
          </NavLink>

          <NavLink to="/bmi">
            BMI
          </NavLink>

          <NavLink to="/contact">
            Contact
          </NavLink>

          {user ? (
            <>
              <NavLink to="/workouts">
                My Workouts
              </NavLink>

              <NavLink to="/dashboard">
                Dashboard
              </NavLink>

              <button
                type="button"
                className="btn btn-outline btn-sm"
                onClick={handleLogout}
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <NavLink to="/login">
                Log In
              </NavLink>

              <Link to="/signup" className="btn btn-primary btn-sm">
                Sign Up
              </Link>
            </>
          )}
        </nav>

        <button
          type="button"
          className={`hamburger ${open ? "is-open" : ""}`}
          onClick={toggleMenu}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="main-navigation"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
}