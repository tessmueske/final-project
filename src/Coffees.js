import React from "react";
import Coffee from "./Coffee";

function Coffees({ coffees }) {

    return (
        <div>
            <h2>This is our coffee index! </h2>
            <h3>You can view our complete list of coffees below:</h3>
            {coffees.map((coffee) => <Coffee key={coffee.id} coffee={coffee}/>)}
        </div>
    );
}

export default Coffees;