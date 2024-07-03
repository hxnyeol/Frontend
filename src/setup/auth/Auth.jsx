import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import Cookies from "js-cookie";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(Cookies.get("access-token"));
  // useEffect(() => {
  //   setToken(Cookies.get("access-token"));
  //   if (token) {
  //     console.log("worked");
  //     axios.defaults.headers.common["Authorization"] = `Bearer ${token}`; // Make an Auth Header if token is valid
  //     // setUser({ token: token });
  //   }
  // }, []);

  // for testing
  // useEffect(() => {
  //   console.log("Debugging State : ", token);
  // }, [token]);

  const login = () => {
    const tempToken = Cookies.get("access-token");
    if (tempToken) {
      setToken(Cookies.get("access-token"));
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    }
  };

  const logout = () => {
    // Must Log out
    setToken(null); // change token to NULL!
    Cookies.remove("access-token");
    axios.defaults.headers.common["Authorization"] = null;
  };
  return (
    <AuthContext.Provider value={{ login, logout, token }}>
      {children}
    </AuthContext.Provider>
  );
};

// Hook
export const useAuth = () => useContext(AuthContext);
