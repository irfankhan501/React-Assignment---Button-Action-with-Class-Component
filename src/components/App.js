import React, { Component, useState } from "react";
import "../styles/App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      para: "",
      id: "",
    };
  }
  handleClick() {
    this.setState({
      para:
        "Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy",
      id: "para",
    });
  }
  render() {
    return (
      <div id="main">
        <button id="click" onClick={this.handleClick.bind(this)}>
          click me!
        </button>
        <p id={this.state.id}>{this.state.para}</p>
      </div>
    );
  }
}

export default App;
