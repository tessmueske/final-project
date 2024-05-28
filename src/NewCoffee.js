import React, { useState } from "react";
import { useOutletContext } from "react-router-dom";

function NewCoffee() {

    const [origin, setOrigin]=useState("");
    const [harvest, setHarvest]=useState("");
    const [tasting, setTasting]=useState("");
    const [aroma, setAroma]=useState("");
    const [pairing, setPairing]=useState("");

    const {addCoffee} = useOutletContext();

    function handleSubmit(e){
        e.preventDefault();
        const newCoffee = {
            origin: origin,
            harvestPeriod: harvest, 
            tastingNotes: tasting,  
            aromas: aroma,       
            pairings: pairing   
        };

        console.log("Submitting new coffee:", newCoffee); 
    
        fetch("http://localhost:3000/coffees", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newCoffee),
            })
        .then((r) => r.json())
        .then((newCoffee) => console.log(newCoffee));
            setOrigin("");
            setHarvest("");
            setTasting("");
            setAroma("");
            setPairing("");
    }

    function handleOriginChange(e){
        e.preventDefault();
        setOrigin(e.target.value);
    };

    function handleHarvestChange(e){
        e.preventDefault();
        setHarvest(e.target.value);
    };

    function handleTastingChange(e){
        e.preventDefault();
        setTasting(e.target.value);
    };

    function handleAromaChange(e){
        e.preventDefault();
        setAroma(e.target.value);
    };

    function handlePairingChange(e){
        e.preventDefault();
        setPairing(e.target.value);
    };

    return (
        <div>
            <br></br>
            <form onSubmit={handleSubmit}>
                <label><strong>add your coffee to our index using the form below:</strong></label>
                <br ></br>
                <br ></br>
                <label> 
                    <strong>origin: </strong>
                    <input type="text" onChange={handleOriginChange} placeholder="enter the origin" value={origin} />
                </label>
                <br ></br>
                <br ></br>
                <label>
                    <strong>harvest period: </strong>
                    <input type="text" onChange={handleHarvestChange} placeholder="enter the harvest period" value={harvest} />
                </label>
                <br ></br>
                <br ></br>
                <label>
                    <strong>tasting notes: </strong>
                    <input type="text" onChange={handleTastingChange} placeholder="enter the tasting notes" value={tasting} />
                </label>
                <br ></br>
                <br ></br>
                <label>
                    <strong>aromas: </strong>
                    <input type="text" onChange={handleAromaChange} placeholder="enter the aromas" value={aroma} />
                </label>
                <br ></br>
                <br ></br>
                <label>
                    <strong>food pairings: </strong>
                    <input type="text" onChange={handlePairingChange} placeholder="enter the food pairings" value={pairing} />
                </label>
                <br ></br>
                <br ></br>
                <button type="submit">submit!</button>
            </form>
        </div>
    );
}

export default NewCoffee;