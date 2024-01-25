import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Footer from "./components/Footer";


export default function App() {
  return (
    <>
      <div>
        <Router>
          <Navbar h="TextUtils" />
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route exact path="/about" element={<About />}></Route>
            <Route exact path="/contact" element={<Contact />}></Route>
          </Routes>
          <Footer/>
        </Router>
      </div>
    </>
  );
}
