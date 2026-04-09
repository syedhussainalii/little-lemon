import React from "react";

const Header = () => {
  return (
    <>
      <style>{`
        .site-header {
          background: var(--color-primary-dark);
          padding: var(--space-xl) 0;
        }

        .site-header .container {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .site-header h1 {
          color: #fff;
          margin: 0;
        }
      `}</style>
      <header className="site-header" aria-labelledby="site-title">
        <div className="container">
          <h1 id="site-title">Little Lemon</h1>
        </div>
      </header>
    </>
  );
};

export default Header;
