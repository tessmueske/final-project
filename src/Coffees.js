import React, { useState, useEffect } from "react";
import Coffee from "./Coffee";
import NewCoffee from "./NewCoffee"

function Coffees() {

const [coffees, setCoffees] = useState([]);

  useEffect(() => {
      fetch("http://localhost:3000/coffees")
          .then(r => r.json())
          .then(data => setCoffees(data));
  }, []);

    return (
        <div>
            <h2>this is our global coffee index! </h2>
            {coffees.map((coffee) => <Coffee key={coffee.id} coffee={coffee} />)}
            <br></br>
            <h2>add your coffee here, or click on the form above:</h2>
            <br></br>
            <NewCoffee />
            <br></br>
            <br></br>
        </div>
    );
}

export default Coffees;