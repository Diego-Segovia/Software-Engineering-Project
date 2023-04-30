import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SearchCatalogPage from "./pages/SearchCatalogPage";
import HomePage from "./pages/Homepage";
import RootLayout from "./pages/Root";
import DetailBookPage from "./pages/DetailBookPage";
import LibrarianDashboardPage from "./pages/LibrarianDashboardPage";
import PatronSignUp from "./pages/PatronSignUp";
import LibrarianSignUp from "./pages/LibrarianSignUp";

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
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
