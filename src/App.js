import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";
import './App.css';
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";
import Coffees from "./Coffees";

function App() {
  return (
    < >
    <NavBar />
    <div className="App">
      <h1>Hello, world!</h1>
      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/coffees" element={<Coffees />} />
      </Routes> */}
    </div>
    </>

  );
}

export default App;