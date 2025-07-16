import React, { Component } from "react";

export default class Toggle extends Component {
  constructor() {
    super();
    this.state = {
      isVisible: true,
    };
    this.toggleVisibility = this.toggleVisibility.bind(this);
  }

  toggleVisibility() {
    this.setState((prevState) => ({
      isVisible: !prevState.isVisible,
    }));
  }

  render() {
    return (
      <div>
        <button onClick={this.toggleVisibility}>
          {this.state.isVisible ? "Hide" : "Show"} Element
        </button>
        {this.state.isVisible && <p>This is a toggled element.</p>}
      </div>
    );
  }
}
