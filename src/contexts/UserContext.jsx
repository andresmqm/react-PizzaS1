import { createContext, useState } from "react";

export const UserContext = createContext();

export function UserProvider({ children }) {
  const [token, setToken] = useState(null);
  const [email, setEmail] = useState(null);

  // para eel login

  const login = async (email, password) => {
    const res = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    if (!res.ok) throw new Error("Error en login");

    const data = await res.json();
    setToken(data.token);
    setEmail(data.email);
  };

  // para el register

  const register = async (email, password) => {
    const res = await fetch("http://localhost:5000/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    if (!res.ok) throw new Error("Error en registro");

    const data = await res.json();
    setToken(data.token);
    setEmail(data.email);
  };

  // para logout

  const logout = () => {
    setToken(null);
    setEmail(null);
  };

  // para perfil

  const getProfile = async () => {
    const res = await fetch("http://localhost:5000/api/auth/me", {
      method: "GETT",
      headers: { "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
      },
    });

    if (!res.ok) throw new Error("Error al obtener perfil");

    return await res.json();
  };

  return (

    <UserContext.Provider
      value={{ token, email, login, register, logout, getProfile }}>
      {children}
    </UserContext.Provider>
  );
}
