import React from "react";

const CustomersSay = () => {
  const testimonials = [
    {
      name: "Sara",
      text: "Lovely atmosphere and the food was fresh, bright, and full of flavor.",
    },
    {
      name: "Daniel",
      text: "Service was quick and friendly, and booking a table was super easy.",
    },
    {
      name: "Maria",
      text: "The specials were excellent and the whole experience felt warm and welcoming.",
    },
  ];

  return (
    <>
      <style>{`
      .testimonials { background: var(--color-primary-dark); padding: var(--space-3xl) 0; }
      .testimonials h2 { color: #fff; margin-bottom: var(--space-2xl); }
      .testimonials-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(240px, 1fr)); gap: var(--space-xl); }
      .testimonial-card { background: rgba(255,255,255,0.07); border: 0.5px solid rgba(255,255,255,0.12); border-radius: var(--radius-lg); padding: var(--space-xl); }
      .testimonial-stars { color: var(--color-accent); margin-bottom: var(--space-sm); letter-spacing: 2px; }
      .testimonial-text { font-size: 14px; color: #C8D8D4; line-height: 1.7; }
      .testimonial-name { margin-top: var(--space-md); font-weight: 500; color: #fff; font-size: 14px; }
      `}</style>
      <section className="testimonials" aria-labelledby="testimonials-title">
        <div className="container">
          <h2 id="testimonials-title">Customers Say</h2>
          <div className="testimonials-grid">
            {testimonials.map((testimonial) => (
              <article key={testimonial.name} className="testimonial-card">
                <div className="testimonial-stars">★★★★★</div>
                <p className="testimonial-text">{testimonial.text}</p>
                <p className="testimonial-name">{testimonial.name}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default CustomersSay;
