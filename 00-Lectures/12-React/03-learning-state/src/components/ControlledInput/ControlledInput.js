import React, { Component } from "react";

export default class ControlledInput extends Component {
  constructor() {
    super();
    this.state = {
      inputValue: "",
    };
    this.handleChange = this.handleChange.bind(this); // Binding 'this'
  }

  handleChange(event) {
    this.setState({ inputValue: event.target.value });
  }

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.inputValue}
          onChange={this.handleChange}
        />
        <p>Current Input: {this.state.inputValue}</p>
      </div>
    );
  }
}

