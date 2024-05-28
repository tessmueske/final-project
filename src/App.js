import React, { useState, useEffect } from "react";
import './App.css';
import NavBar from "./NavBar";
import { Outlet, useOutletContext } from "react-router-dom";

function App() {

const [coffees, setCoffees] = useState([]);

function addCoffee(newCoffee){
  setCoffees([...coffees, newCoffee])
}

  useEffect(() => {
    fetch("http://localhost:3000/coffees")
      .then((r) => r.json())
      .then((data) => setCoffees(data));
  }, []);

  return (
    < >
    <NavBar />
      <div className="App">
      <Outlet context={{coffees: coffees, addCoffee: addCoffee}}/>
      </div>
    </>

  );
}

export default App;