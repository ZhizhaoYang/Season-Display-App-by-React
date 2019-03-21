import React, { Component } from "react";

import SeasonDisplay from "./components/SeasonDisplay/SeasonDisplay";
import Spinner from "./utilties/Spinner/Spinner";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      lat: null,
      errorMessage: ""
    };
  }

  componentDidMount = () => {
    window.navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({ lat: position.coords.latitude });
      },
      err => {
        this.setState({
          errorMessage: err.message
        });
      }
    );
  };

  renderContent = () => {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    }

    if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />;
    }

    return <Spinner message="Please accept location request" />;
  };

  render() {
    return (
      <div className="App">
        <div className="border red">{this.renderContent()}</div>
      </div>
    );
  }
}

export default App;
