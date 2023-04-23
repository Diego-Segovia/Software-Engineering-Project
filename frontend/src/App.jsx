import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SearchCatalogPage from "./pages/SearchCatalogPage";
import HomePage from "./pages/Homepage";
import RootLayout from "./pages/Root";
import UserPatronPage from "./pages/UserPatronPage";
import LibrarianProfilePage from "./pages/LibrarianProfilePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/searchCatalog", element: <SearchCatalogPage /> },
      { path: "/userPatronProfile", element: <UserPatronPage /> },
      { path: "/LibrarianProfilePage", element: <LibrarianProfilePage /> } ,
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
