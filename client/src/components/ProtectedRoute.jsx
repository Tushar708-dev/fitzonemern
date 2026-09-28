import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../AuthContext";

// Wrap a page in <ProtectedRoute> and only logged-in users can see it.
export default function ProtectedRoute({ children }) {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading) return <div className="center-screen"><div className="spinner" /></div>;
  if (!user) return <Navigate to="/login" replace state={{ from: location.pathname }} />;
  return children;
}
