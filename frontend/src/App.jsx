import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SearchCatalogPage from "./pages/SearchCatalogPage";
import HomePage from "./pages/Homepage";
import RootLayout from "./pages/Root";
import DetailBookPage from "./pages/DetailBookPage";
import LibrarianDashboardPage from "./pages/LibrarianDashboardPage";
import PatronSignUp from "./pages/PatronSignUp";
import LibrarianSignUp from "./pages/LibrarianSignUp";
import SettingsPage from "./pages/SettingsPage";
import PatronProfile from "./pages/PatronProfile";
import { AuthContext } from "./utils/auth-context";
import { useState, useCallback } from "react";
import TestProfile from "./pages/TestProfile";
import PaymentPage from "./pages/PaymentPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/books", element: <SearchCatalogPage /> },
      { path: "/books/:bookId", element: <DetailBookPage /> },
      { path: "/librarianDashboard", element: <LibrarianDashboardPage /> },
      { path: "/patron-signup", element: <PatronSignUp /> },
      { path: "/staff-signup", element: <LibrarianSignUp /> },
      { path: "/settings", element: <SettingsPage /> },
      { path: "/patron-profile", element: <TestProfile /> },
      { path: "/payment/:fineID/:fineamt", element: <PaymentPage /> },
    ],
  },
]);

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLibrarian, setIsLibrarian] = useState(false);
  const [userData, setUserData] = useState();

  const login = useCallback(() => setIsLoggedIn(true), []);
  const logout = useCallback(() => setIsLoggedIn(false), []);

  const setAsLibrarian = useCallback(
    (condition) => setIsLibrarian(condition),
    []
  );

  const setUser = useCallback((data) => setUserData(data), []);

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        isLibrarian: isLibrarian,
        userData: userData,
        login: login,
        logout: logout,
        setAsLibrarian: setAsLibrarian,
        setUser: setUser,
      }}
    >
      <RouterProvider router={router} />
    </AuthContext.Provider>
  );
}

export default App;
