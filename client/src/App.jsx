import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollProgress from "./components/ScrollProgress";
import ScrollToTop from "./components/ScrollToTop";
import ProtectedRoute from "./components/ProtectedRoute";

import Home from "./pages/Home";
import Exercises from "./pages/Exercises";
import ExerciseDetail from "./pages/ExerciseDetail";
import Bmi from "./pages/Bmi";
import Workouts from "./pages/Workouts";
import Dashboard from "./pages/Dashboard";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import NotFound from "./pages/NotFound";

// This file = the "map" of the website: which URL shows which page.
export default function App() {
  const location = useLocation();

  return (
    <>
      <ScrollProgress />
      <ScrollToTop />
      <Navbar />

      {/* AnimatePresence lets the old page fade out before the new one fades in */}
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/exercises" element={<Exercises />} />
          <Route path="/exercises/:slug" element={<ExerciseDetail />} />
          <Route path="/bmi" element={<Bmi />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          {/* Only for logged-in users */}
          <Route path="/workouts" element={<ProtectedRoute><Workouts /></ProtectedRoute>} />
          <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </AnimatePresence>

      <Footer />
    </>
  );
}
