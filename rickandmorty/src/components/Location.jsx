// import React, { Component } from "react";
// import { useParams } from "react-router-dom";
// class Location extends Component {
//   constructor(props) {
//     super(props);
//   }

//   componentDidMount() {
//     fetch("https://rickandmortyapi.com/api/location")
//       .then((res) => res.json())
//       .then(
//         (result) => {
//           this.setState({
//             isLoaded: true,
//             locations: [...this.state.result.results],
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
//     console.log(this.state.locations);

//     // const { id } = this.props.match.params;
//     // const location = locations.filter((location) => location.name === id);
//     // this.setState({ location: location[0] });
//     return <>img src={this.props.char.image}</>;
//   }
// }
// export default Location;
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams, useLocation } from "react-router-dom";
export default function Location(props) {
  const [data, setData] = useState();
  const location = useLocation();
  const state = location.state.characters;

  let { name } = useParams();

  let character = state.find((char) => char.name === name);
  useEffect(() => {
    getLocation();
  }, []);

  function getLocation() {
    axios.get(`${character.location.url}`).then((response) => {
      setData({
        ...response.data,
      });
    });
  }
  console.log(data);
  if (data) {
    return (
      <>
        <h1>this is this profile for {name}!</h1>
        <img src={character.image} />
        <p>{character.name}</p>
        <p>Location:{data.name}</p>
        <p>Type: {data.type}</p>
        <p>Dimension:{data.dimestion}</p>
        <p>Population:{data.residents.length}</p>
      </>
    );
  }
  return <img src={character.image} />;
}
