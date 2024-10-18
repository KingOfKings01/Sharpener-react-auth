import { useState } from "react";
import { authContext } from "./authContext";

const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem('token'));

  const login = (token) => {
    localStorage.setItem('token', token);
    setToken(token);
  };

  const logout = () => {
    localStorage.removeItem('token');
    setToken("");
  };

  return (
    <authContext.Provider
      value={{ token, login, logout }}
    >
      {children}
    </authContext.Provider>
  );
};


export default AuthProvider;