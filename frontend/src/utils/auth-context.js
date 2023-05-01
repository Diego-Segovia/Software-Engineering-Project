import { createContext } from "react";

export const AuthContext = createContext({
  isLoggedIn: false,
  isLibrarian: false,
  userData: {},
  login: () => {},
  logout: () => {},
});
