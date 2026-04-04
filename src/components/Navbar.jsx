import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Menu</a></li>
        <li><Link to="/booking">Reservations</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
