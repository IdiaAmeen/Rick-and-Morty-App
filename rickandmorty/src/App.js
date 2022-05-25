import React, { useEffect, useState } from "react";
import Characters from "./components/Characters";
import Location from "./components/Location";
import Modal from "./components/Modal";
import { Route, Routes } from "react-router-dom";
import axios from "axios";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route exact path="/" element={<Characters />} />
        <Route exact path="/location/:name" element={<Location />} />
      </Routes>
    </div>
  );
}

export default App;
