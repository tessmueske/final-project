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
            <h2>This is our coffee index! </h2>
            <h3>You can view our complete list of coffees below:</h3>
            {coffees.map((coffee) => <Coffee key={coffee.id} coffee={coffee}/>)}
            <NewCoffee />
        </div>
    );
}

export default Coffees;