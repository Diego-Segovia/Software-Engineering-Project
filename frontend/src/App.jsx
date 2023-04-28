import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SearchCatalogPage from "./pages/SearchCatalogPage";
import HomePage from "./pages/Homepage";
import RootLayout from "./pages/Root";
import UserPatronPage from "./pages/UserPatronPage";
import LibrarianProfilePage from "./pages/LibrarianProfilePage";
import DetailBookPage from "./pages/DetailBookPage";
import LibrarianDashboardPage from "./pages/LibrarianDashboardPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/books", element: <SearchCatalogPage /> },
      { path: "/books/:bookId", element: <DetailBookPage /> },
      { path: "/librarianDashboard", element: <LibrarianDashboardPage /> },
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
