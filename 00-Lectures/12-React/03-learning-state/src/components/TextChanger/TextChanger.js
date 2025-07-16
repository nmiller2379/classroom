import React, { Component } from "react";

export default class TextChanger extends Component {
  constructor() {
    super();
    this.state = {
      text: "Hello, World!",
    };
    this.changeText = this.changeText.bind(this); 
  }

  changeText() {
    this.setState({ text: "Text Updated!" });
  }

  render() {
    return (
      <div>
        <p>{this.state.text}</p>
        <button onClick={this.changeText}>Change Text</button>
      </div>
    );
  }
}

