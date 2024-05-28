import React from "react";
import Coffee from "./Coffee";
import { useOutletContext } from "react-router-dom";

function Coffees() {

  const {coffees} = useOutletContext();

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
