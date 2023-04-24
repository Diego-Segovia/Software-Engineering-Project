import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SearchCatalogPage from "./pages/SearchCatalogPage";
import HomePage from "./pages/Homepage";
import RootLayout from "./pages/Root";
<<<<<<< HEAD
import UserPatronPage from "./pages/UserPatronPage";
import LibrarianProfilePage from "./pages/LibrarianProfilePage";
=======
import DetailBookPage from "./pages/DetailBookPage";
>>>>>>> bac0bd61b6e9fd360a17aa034631142267612c61

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <HomePage /> },
<<<<<<< HEAD
      { path: "/searchCatalog", element: <SearchCatalogPage /> },
      { path: "/userPatronProfile", element: <UserPatronPage /> },
      { path: "/LibrarianProfilePage", element: <LibrarianProfilePage /> } ,
=======
      { path: "/books", element: <SearchCatalogPage /> },
      { path: "/books/:bookId", element: <DetailBookPage /> },
>>>>>>> bac0bd61b6e9fd360a17aa034631142267612c61
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
