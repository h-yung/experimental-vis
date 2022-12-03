import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";

// import './Layout.css';

export default function Layout() {
  return (
    <div className="Layout__wrapper">
      <main className="wrapper">
        <Outlet />
      </main>
      <NavBar />
    </div>
  );
}
