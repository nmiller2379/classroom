import React, { Component } from "react";

export default class Welcome extends Component {
  constructor() {
    super();
    this.state = {
      message: "Welcome to React!",
    };
  }

  render() {
    return (
      <div>
        <p>{this.state.message}</p>
      </div>
    );
  }
}


