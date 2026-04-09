function Footer() {
  return (
    <>
      <style>{`
        .footer { background: var(--color-primary-dark); color: #B0C7BF; padding: var(--space-3xl) 0 var(--space-xl); }
        .footer .container { display: grid; grid-template-columns: 2fr 1fr 1fr 1fr; gap: var(--space-2xl); }
        .footer h4 { color: #fff; font-size: 15px; margin-bottom: var(--space-md); }
        .footer a  { color: #B0C7BF; text-decoration: none; display: block; margin-bottom: var(--space-sm); font-size: 14px; }
        .footer a:hover { color: var(--color-accent); }
        .footer-bottom { border-top: 0.5px solid rgba(255,255,255,0.1); margin-top: var(--space-2xl); padding-top: var(--space-lg); font-size: 13px; text-align: center; }
        @media (max-width: 768px) { .footer .container { grid-template-columns: 1fr 1fr; } }
      `}</style>
      <footer className="footer">
        <div className="container">
          <div>
            <h4>Little Lemon</h4>
            <p>Fresh flavors, warm hospitality, and a relaxed dining experience.</p>
          </div>
          <div>
            <h4>Navigation</h4>
            <a href="/">Home</a>
            <a href="#">About</a>
            <a href="#">Menu</a>
          </div>
          <div>
            <h4>Contact</h4>
            <a href="tel:+1234567890">(123) 456-7890</a>
            <a href="mailto:hello@littlelemon.com">hello@littlelemon.com</a>
            <a href="#">Chicago, Illinois</a>
          </div>
          <div>
            <h4>Social</h4>
            <a href="#">Instagram</a>
            <a href="#">Facebook</a>
            <a href="#">X</a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2026 Little Lemon</p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
