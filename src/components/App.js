import React, { Component, useState } from "react";
import "../styles/App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      p: null,
    };
  }
  handleClick() {
    this.setState({
      p: (
        <p id="para">
          Hello, I've learnt to use the full-stack evaluation tool. This makes
          me so happy
        </p>
      ),
    });
  }
  render() {
    return (
      <div id="main">
        <button id="click" onClick={this.handleClick.bind(this)}>
          click me!
        </button>
        {this.state.p}
      </div>
    );
  }
}

export default App;
