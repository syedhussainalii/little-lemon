import React from "react";
import "./Chicago.css";
import chicago from "../assets/images/chicago.jpg";

const Chicago = () => {
  return (
    <section
      id="about"
      className="chicago-section"
      aria-labelledby="chicago-title"
    >
      <div className="chicago-inner">
        <div className="chicago-text">
          <span className="chicago-tag">Our story</span>
          <h2 id="chicago-title">Chicago</h2>
          <p className="chicago-sub">Family-owned since 2010</p>
          <p>
            Nestled in the heart of Chicago, Little Lemon brings the warmth of
            the Mediterranean to every plate. Founded by two siblings who grew
            up cooking beside their grandmother in Greece, our recipes carry
            decades of tradition.
          </p>
          <p>
            We believe great food is about more than flavour - it&apos;s about
            community, memory, and the table you share it at.
          </p>
        </div>

        <div className="chicago-image" aria-hidden="true">
          <img
            src={chicago}
            alt="Inside Little Lemon restaurant"
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>

      <div className="chicago-stats">
        <div className="chicago-stat">
          <span className="stat-num">15+</span>
          <span className="stat-lbl">Years in Chicago</span>
        </div>
        <div className="chicago-stat">
          <span className="stat-num">4.9 stars</span>
          <span className="stat-lbl">Average rating</span>
        </div>
        <div className="chicago-stat">
          <span className="stat-num">30k+</span>
          <span className="stat-lbl">Happy guests</span>
        </div>
      </div>
    </section>
  );
};

export default Chicago;
