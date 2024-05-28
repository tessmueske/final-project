import React, { useState, useEffect } from "react";
import Coffee from "./Coffee";
import NewCoffee from "./NewCoffee";
import { Outlet, useOutletContext } from "react-router-dom";

function Coffees() {

const {coffees} = useOutletContext();

// const [coffees, setCoffees] = useState([]);

// function addCoffee(newCoffee){
//   setCoffees([...coffees, newCoffee])
// }

//   useEffect(() => {
//     fetch("http://localhost:3000/coffees")
//       .then((r) => r.json())
//       .then((data) => setCoffees(data));
//   }, []);

  return (
    <div>
      <h2>this is our global coffee index!</h2>
      {coffees.map((coffee) => (
        <Coffee key={coffee.id} coffee={coffee} />
      ))}
    </div>
  );
}

export default Coffees;
