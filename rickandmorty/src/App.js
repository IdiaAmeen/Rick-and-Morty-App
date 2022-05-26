import React, { useEffect, useState } from "react";

import Characters from "./components/Characters";
import Location from "./components/Location";

import { Route, Routes, Router } from "react-router-dom";
import axios from "axios";

function App(props) {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<Characters />} />
          {/* <Route path="/location/:name" element={<Location />} /> */}
        </Routes>
      </Router>
    </div>
  );
}
export default App;
// import React, { Component } from "react";
// import { Route, Routes } from "react-router-dom";
// import axios from "axios";
// import Characters from "./components/Characters";
// import Location from "./components/Location";

// export default class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       characters: [],
//       locations: [],
//     };
//   }
//   componentDidMount() {
//     fetch("https://rickandmortyapi.com/api/character")
//       .then((res) => res.json())
//       .then(
//         (result) => {
//           this.setState({
//             isLoaded: true,
//             characters: result.results,
//           });
//         },

//         (error) => {
//           this.setState({
//             isLoaded: true,
//             error,
//           });
//         }
//       );
//     fetch("https://rickandmortyapi.com/api/location")
//       .then((res) => res.json())
//       .then(
//         (result) => {
//           this.setState({
//             isLoaded: true,
//             locations: result.results,
//           });
//         },

//         (error) => {
//           this.setState({
//             isLoaded: true,
//             error,
//           });
//         }
//       );
//   }
//   render() {
//     return (
//       <>
//         <Routes>
//           {/* <Route path="/" element ={  {this.state.characters.map((character) => (
//               <Characters key={character.name} character={character} />
//             ))}}>
//      */}
//           <Route path="/" element={<Characters />}></Route>

//           {this.state.locations.map((location) => (
//             <Location
//               key={location.name}
//               location={location}
//               characters={this.state.characters}
//             />
//           ))}
//         </Routes>
//       </>
//     );
//   }
// }
