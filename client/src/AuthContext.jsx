import { createContext, useContext, useEffect, useState } from "react";
import { api } from "./api";

// Keeps "who is logged in?" in one place, so any component can call useAuth().
const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // On first load, ask the server if we already have a login session
  useEffect(() => {
    api.get("/auth/me")
      .then((d) => setUser(d.user))
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  async function login(email, password) {
    const d = await api.post("/auth/login", { email, password });
    setUser(d.user);
  }
  async function signup(name, email, password) {
    const d = await api.post("/auth/signup", { name, email, password });
    setUser(d.user);
  }
  async function logout() {
    await api.post("/auth/logout");
    setUser(null);
  }

  return (
    <AuthContext.Provider value={{ user, loading, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
