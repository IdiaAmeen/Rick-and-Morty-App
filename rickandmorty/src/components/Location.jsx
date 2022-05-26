import React, { Component } from "react";
import { useParams } from "react-router-dom";
class Location extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    fetch("https://rickandmortyapi.com/api/location")
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            locations: [...this.state.result.results],
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
    return <>img src={this.props.char.image}</>;
  }
}
export default Location;
