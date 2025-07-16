import React, { Component } from "react";
import Input from "../Input/Input";

export default class ControlledForm extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
    };
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    alert(`Name: ${this.state.name}, Email: ${this.state.email}`);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <Input
          labelText="Name: "
          inputType="text"
          inputName="name"
          inputValue={this.state.name}
          inputChange={this.handleChange}
        />
        <Input
          labelText="Email: "
          inputType="email"
          inputName="email"
          inuptValue={this.state.email}
          inputChange={this.handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    );
  }
}
