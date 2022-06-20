import "./App.css";
import Navbar from "./Components/Navbar";
import Links from "./Components/Links";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";

function App() {

  return (
    <>
      <Router>
        <div className="App">
        <Navbar github="https://github.com/G4MB1T24"></Navbar>
      </div>
        <Routes>
          <Route path="/" element={<Home></Home>} />
          <Route path="links" element={<Links />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
