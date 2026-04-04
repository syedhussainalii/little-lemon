import "./App.css";
import "./index.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";


function App() {
  return (
    <>
      <Header />
      <Navbar />
      <div className="container">
        <Main />
      </div>
      <Footer />
    </>
  );
}

export default App;
