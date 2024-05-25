import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React, { useState, useEffect } from "react";
import './App.css';
import NavBar from "./NavBar";
import { Outlet } from "react-router-dom";

function App() {

  return (
    < >
    <NavBar />
      <div className="App">
      <Outlet />
    </div>
    </>

  );
}

export default App;