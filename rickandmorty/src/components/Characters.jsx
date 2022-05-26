import React, { Component } from "react";
import { Link, useParams } from "react-router-dom";
class Characters extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,

      characters: [],
      locations: [],
    };
  }

  componentDidMount() {
    fetch("https://rickandmortyapi.com/api/character")
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            characters: result.results,
          });
        },

        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
    fetch("https://rickandmortyapi.com/api/location")
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            location: result.results,
          });
        },

        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }

  render() {
    const { error, isLoaded, characters, locations } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <>
          {characters.map((char) => (
            <Link
              to={`/location/${char.location.name}`}
              state={{ char }}
              className="characer"
              key={char.id}
              item={char}
            >
              <img src={char.image} />
              {char.name} {char.status} {char.species}
            </Link>
          ))}
        </>
      );
    }
  }
}
export default useParams(Characters);
// class Characters extends Component {
//   constructor(props) {
//     super(props);
//   }

//   render() {
//     const char = this.props.character;
//     return (
//       <>
//         <Link to={`/location/${char.location.name}`}>
//           <img src={char.image} alt={char.name} height="100px" width="100px" />
//           <p>{char.status}</p>
//           <p>{char.species}</p>
//         </Link>
//       </>
//     );
//   }
// }
// export default Characters;
