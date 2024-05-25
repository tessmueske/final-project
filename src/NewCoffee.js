import React, { useState } from "react";

function NewCoffee() {
const [origin, setOrigin]=useState("");
const [harvest, setHarvest]=useState("");
const [tasting, setTasting]=useState("");
const [aroma, setAroma]=useState("");
const [pairing, setPairing]=useState("");

function handleSubmit(e){
    e.preventDefault();
    //something here
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
            <p>Add your coffee to our index here!</p>
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={handleOriginChange} value={origin} />
                <input type="text" onChange={handleHarvestChange} value={harvest} />
                <input type="text" onChange={handleTastingChange} value={tasting} />
                <input type="text" onChange={handleAromaChange} value={aroma} />
                <input type="text" onChange={handlePairingChange} value={pairing} />
                <button type="submit">submit!</button>
            </form>
        </div>
    );
}

export default NewCoffee;