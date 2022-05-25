import React, { Component } from "react";
import { Link } from "react-router-dom";
class Characters extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      isDisplay: false,
      items: [],
    };
  }

  componentDidMount() {
    fetch("https://rickandmortyapi.com/api/character")
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result.results,
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
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <>
          {items.map((item) => (
            <Link
              to={`/location/${item.location.name}`}
              state={{ item }}
              className="characer"
              key={item.id}
              item={item}
            >
              <img src={item.image} />
              {item.name} {item.status} {item.species}
            </Link>
          ))}
        </>
      );
    }
  }
}
export default Characters;
