import React from "react";
import Coffee from "./Coffee";
import NewCoffee from "./NewCoffee";

function Coffees() {
    return (
        <div>
            <p>This is my coffees page!</p>
            <Coffee />
            <NewCoffee />
        </div>
    );
}

export default Coffees;