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
            <p>add your coffee to our index here!</p>
            <form onSubmit={handleSubmit}>
                <label> 
                    <strong>origin:</strong>
                    <input type="text" onChange={handleOriginChange} value={origin} />
                </label>
                <br ></br>
                <br ></br>
                <label>
                    <strong>harvest period:</strong>
                    <input type="text" onChange={handleHarvestChange} value={harvest} />
                </label>
                <br ></br>
                <br ></br>
                <label>
                    <strong>tasting notes:</strong>
                    <input type="text" onChange={handleTastingChange} value={tasting} />
                </label>
                <br ></br>
                <br ></br>
                <label>
                    <strong>aromas:</strong>
                    <input type="text" onChange={handleAromaChange} value={aroma} />
                </label>
                <br ></br>
                <br ></br>
                <label>
                    <strong>food pairings:</strong>
                    <input type="text" onChange={handlePairingChange} value={pairing} />
                </label>
                <br ></br>
                <br ></br>
                <button type="submit">submit!</button>
            </form>
        </div>
    );
}

export default NewCoffee;