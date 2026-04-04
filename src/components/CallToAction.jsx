import React from 'react';
import { Link } from "react-router-dom";

const CallToAction = () => {
  return (
    <section className="full-width card">
      <h2>Welcome to Little Lemon</h2>
      <p>Reserve a table at our restaurant</p>
      <Link to="/booking" className="btn">Reserve a Table</Link>
    </section>
  );
};

export default CallToAction;
