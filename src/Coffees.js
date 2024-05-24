import React, { useEffect, useState } from "react";
import Coffee from "./Coffee";
import NewCoffee from "./NewCoffee";
import NavBar from "./NavBar";

function Coffees() {
const [coffees, setCoffees] = useState([])

useEffect(() => {
    fetch("http://localhost:3000/coffees")
    .then(r => r.json())
    .then(data => setCoffees(data))
}, [])

    return (
        <div>
            <p>This is my coffees page!</p>
            {coffees.map((coffee) => <Coffee key={coffee.id} coffee={coffee}/>)}
            <NewCoffee />
        </div>
    );
}

export default Coffees;