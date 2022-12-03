import { useState } from "react";
import { NavLink } from "react-router-dom";
import { MehOutlined, SmileOutlined } from "@ant-design/icons";
import "./NavBar.css";

export default function NavBar() {
  const [face, setFace] = useState(<MehOutlined className="logo" />);
  const swapLogoYay = () => {
    setFace(<SmileOutlined className="logo" />);
    console.log("Yay!");
  };
  const swapLogoNay = () => {
    setFace(<MehOutlined className="logo" />);
    console.log("Nay!");
  };
  return (
    <div className="nav__wrapper">
      <ul className="navigation">
        <li className="logo__home">
          <NavLink to="/" onMouseOver={swapLogoYay} onMouseLeave={swapLogoNay}>
            {face}
          </NavLink>
        </li>
        <li className="">
          <NavLink to="/trackpad" className="Nav-Link">
            Trackpad
          </NavLink>
        </li>
        <li className="">
          <NavLink to="/about" className="Nav-Link">
            About
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
