import React, { useEffect, useState } from "react";

import Characters from "./components/Characters";
import Location from "./components/Location";

import { Route, Routes, Router } from "react-router-dom";

function App(props) {
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
