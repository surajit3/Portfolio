import React from "react";
import "./navbar.css";
import { Link } from "react-scroll";

const Navbar = () => {
  const showMenu = () => {
    alert()
  }
  return (
    <nav>
      <span id="logo"> <a href=""> myStack </a>
      </span>
      <span id="options">
        <span id="menu" onClick={showMenu}> ... </span>
        <ul>
          <li> <a href="">Home</a> </li>
          <li> <a href="">About me</a> </li>
          <li> <a href="">My Skills</a> </li>
          <li> <a href="">Projects</a> </li>
          <li> <a href="">Contact me</a> </li>
        </ul>
      </span>
    </nav>
  );
};

export default Navbar;
