import { useState } from "react";
import { authContext } from "./authContext";

const AuthProvider = ({ children }) => {
  const [token, setToken] = useState("");

  const login = (token) => {
    setToken(token);
  };

  const logout = () => {
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