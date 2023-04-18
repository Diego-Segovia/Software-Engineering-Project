import NavBar from "../components/UI/Navbar";
import { Outlet } from "react-router-dom";

function RootLayout() {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
}
export default RootLayout;
