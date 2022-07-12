import "./App.css";
import Navbar from "./Components/Navbar";
import Links from "./Components/Links";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Footer from "./Components/Footer";
import TechStack from "./Components/TechStack";

function App() {
  return (
    <>
      <Router>
        <div className="App">
          <Navbar ></Navbar>
        </div>
        <Routes>
          <Route path="/" element={<Home></Home>} />
          <Route path="links" element={<Links />} />
          <Route path="tech" element={<TechStack />} />
        </Routes>

        <Footer></Footer>
      </Router>
    </>
  );
}

export default App;
