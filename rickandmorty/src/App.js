import React, { useEffect, useState } from "react";
import Characters from "./components/Characters";
import { Route, withRouter } from "react-router-dom";
import axios from "axios";

function App() {
  return <Characters />;
}

export default App;
