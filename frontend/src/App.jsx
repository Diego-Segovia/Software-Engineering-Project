import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SearchCatalogPage from "./pages/SearchCatalogPage";
import HomePage from "./pages/Homepage";
import RootLayout from "./pages/Root";
import LibrarianDashboardPage from "./pages/LibrarianDashboardPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/searchCatalog", element: <SearchCatalogPage /> },
	  { path: "/librarianDashboard", element: <LibrarianDashboardPage /> }
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
