import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <style>{`
        .navbar { background: #fff; border-bottom: 0.5px solid var(--color-border); position: sticky; top: 0; z-index: 100; }
        .navbar .container { display: flex; align-items: center; justify-content: space-between; padding-top: var(--space-md); padding-bottom: var(--space-md); }
        .navbar-logo img { height: 40px; }
        .navbar-links { display: flex; gap: var(--space-xl); list-style: none; }
        .navbar-links a { font-size: 15px; color: var(--color-text-main); text-decoration: none; }
        .navbar-links a:hover, .navbar-links a.active { color: var(--color-primary); border-bottom: 2px solid var(--color-accent); padding-bottom: 2px; }
        @media (max-width: 768px) { .navbar-links { display: none; } .hamburger { display: block; } }
      `}</style>
      
      <nav className="navbar" aria-label="Primary navigation">
        <div className="container">
          <ul className="navbar-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Menu</a>
        </li>
        <li>
          <Link to="/booking">Reservations</Link>
        </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
