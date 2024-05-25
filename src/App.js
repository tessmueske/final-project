import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React, { useState, useEffect } from "react";
import './App.css';
import NavBar from "./NavBar";
import { Outlet } from "react-router-dom";
import Coffees from "./Coffees";
import NewCoffee from "./NewCoffee";

function App() {
const [coffees, setCoffees] = useState([]);

  useEffect(() => {
      fetch("http://localhost:3000/coffees")
          .then(r => r.json())
          .then(data => setCoffees(data));
  }, []);

  const addCoffee = (newCoffee) => {
      setCoffees([...coffees, newCoffee]);
  };

  return (
    < >
    <NavBar />
      <div className="App">
      <Outlet />
      <Coffees coffees={coffees} />
      <NewCoffee addCoffee={addCoffee} />
    </div>
    </>

  );
}

export default App;