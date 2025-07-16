import React, { Component } from "react";

export default class ConditionalRender extends Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: true,
    };
  }

  render() {
    return(this.state.isLoggedIn ? <h1>Welcom back!</h1> : <h1>Please log in.</h1>)
  }
}
