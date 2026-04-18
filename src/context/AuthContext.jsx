import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  // 🔥 DIRECT INIT (NO useEffect)
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("user");
    return savedUser ? JSON.parse(savedUser) : null;
  });

  // 🔐 LOGIN
  const login = (email, password) => {
    const savedUser = JSON.parse(localStorage.getItem("registeredUser"));

    if (
      savedUser &&
      savedUser.email === email &&
      savedUser.password === password
    ) {
      setUser(savedUser);
      localStorage.setItem("user", JSON.stringify(savedUser));
      return true;
    }

    return false;
  };

  // 📝 REGISTER
  const register = (email, password) => {
    const newUser = { email, password };
    localStorage.setItem("registeredUser", JSON.stringify(newUser));
    return true;
  };

  // 🚪 LOGOUT
  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

// 🔗 HOOK
export function useAuth() {
  return useContext(AuthContext);
}