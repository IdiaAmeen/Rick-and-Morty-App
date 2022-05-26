import React, { Component } from "react";

import Characters from "./components/Characters";
import Location from "./components/Location";

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Characters />} />
        <Route path="/:name" element={<Location />} />
      </Routes>
    </div>
  );
}
export default App;
