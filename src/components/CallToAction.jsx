import React from "react";
import { Link } from "react-router-dom";
import little from "../assets/images/Little.png";

const CallToAction = () => {
  return (
    <>
      <style>{`
        .hero { background: var(--color-primary-dark); padding: var(--space-3xl) 0; }
        .hero .container { display: grid; grid-template-columns: 1fr 1fr; gap: var(--space-3xl); align-items: center; }
        .hero h1 { color: var(--color-accent); margin-bottom: var(--space-xs); }
        .hero h2 { color: #fff; font-size: 24px; margin-bottom: var(--space-md); }
        .hero p  { color: #B0C7BF; margin-bottom: var(--space-xl); }
        .hero .btn { color: #B0C7BF; }
        .hero .btn:hover { color: #fff; }
        .hero-img { border-radius: var(--radius-xl); object-fit: cover; width: 100%; height: 380px; }
        @media (max-width: 768px) { .hero .container { grid-template-columns: 1fr; } .hero-img { display: none; } }
      `}</style>
      <section className="hero" aria-labelledby="hero-title">
        <div className="container">
          <div>
            <h1 id="hero-title">Little Lemon</h1>
            <h2>Welcome to Little Lemon</h2>
            <p>Reserve a table at our restaurant</p>
            <Link to="/booking" className="btn">
              Reserve a Table
            </Link>
          </div>
          <img className="hero-img" src={little} alt="Little Lemon hero" />
        </div>
      </section>
    </>
  );
};

export default CallToAction;
