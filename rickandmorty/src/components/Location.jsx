import React, { Component } from "react";
import { Link } from "react-router-dom";
class Location extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,

      locations: {},
    };
  }

  componentDidMount() {
    fetch("https://rickandmortyapi.com/api/location")
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            locations: result.results,
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
    console.log(this.state.locations);

    // const { id } = this.props.match.params;
    // const location = locations.filter((location) => location.name === id);
    // this.setState({ location: location[0] });
    return <>hi</>;
  }
}
export default Location;
