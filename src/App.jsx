import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./App.css";
import "./index.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

function ScrollToHash() {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const element = document.getElementById(location.hash.slice(1));

    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [location]);

  return null;
}

function App() {
  return (
    <>
      <ScrollToHash />
      <Header />
      <Navbar />
      <div className="container" role="presentation">
        <Main />
      </div>
      <Footer />
    </>
  );
}

export default App;
