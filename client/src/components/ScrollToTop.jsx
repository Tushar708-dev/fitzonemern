import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// When you open a new page, jump back to the top (React Router does not do this by itself).
export default function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}
