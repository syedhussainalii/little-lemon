import React from "react";
import { Link } from "react-router-dom";
import greekSaladImage from "../assets/images/Greek Salad.jpg";
import bruschettaImage from "../assets/images/Bruschetta .jpg";
import lemonDessertImage from "../assets/images/Lemon Dessert.jpg";
import grilledFishImage from "../assets/images/fish.jpg";

const Specials = () => {
  const dishes = [
    {
      title: "Greek Salad",
      price: "$12.99",
      description: "Crisp lettuce, peppers, olives, and feta with a light dressing.",
      image: greekSaladImage,
    },
    {
      title: "Bruschetta",
      price: "$7.99",
      description: "Grilled bread topped with tomato, garlic, and fresh herbs.",
      image: bruschettaImage,
    },
    {
      title: "Lemon Dessert",
      price: "$6.99",
      description: "A bright and sweet finish with Little Lemon's signature flavor.",
      image: lemonDessertImage,
    },
    {
      title: "Grilled Fish",
      price: "$14.99",
      description: "Freshly grilled fish served with seasonal herbs and citrus.",
      image: grilledFishImage,
    },
  ];

  return (
    <>
      <style>{`
        .specials { background: var(--color-bg-page); }
        .specials-header { display: flex; align-items: center; justify-content: space-between; margin-bottom: var(--space-xl); }
        .specials-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: var(--space-xl); }
        .dish-img { width: 100%; height: 180px; object-fit: cover; }
        .dish-footer { display: flex; justify-content: space-between; align-items: center; margin-top: var(--space-md); }
        .dish-link { font-weight: 500; color: var(--color-primary-dark); text-decoration: none; }
      `}</style>
      <section id="menu" className="specials" aria-labelledby="specials-title">
        <div className="container">
          <div className="specials-header">
            <h2 id="specials-title">Specials</h2>
            <Link to="/booking" className="btn">
              Online Menu
            </Link>
          </div>
          <div className="specials-grid">
            {dishes.map((dish) => (
              <article key={dish.title} className="card">
                <img
                  className="dish-img"
                  src={dish.image}
                  alt={dish.title}
                  loading="lazy"
                  decoding="async"
                />
                <div className="dish-footer">
                  <h3>{dish.title}</h3>
                  <span>{dish.price}</span>
                </div>
                <p>{dish.description}</p>
                <Link to="/booking" className="dish-link">
                  Order a delivery
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Specials;
