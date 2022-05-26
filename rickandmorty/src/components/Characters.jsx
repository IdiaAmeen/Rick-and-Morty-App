import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Characters.css";
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
  }

  render() {
    const { error, isLoaded, characters } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <>
          {characters.map((char) => (
            <Link
              to={`/${char.name}`}
              className="character"
              key={char.id}
              state={this.state}
            >
              <img src={char.image} id="img" />
              <p id="name">{char.name} </p>
              <p id="status"> {char.status}</p>
              <p id="species"> {char.species}</p>
            </Link>
          ))}
        </>
      );
    }
  }
}
export default Characters;
