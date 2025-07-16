import React, { useState } from "react";
import Input from "../Input/Input";
import Display from "../Display/Display";

export default function Form() {
  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const handleChange = (e) => {
    console.log(e.target.value.name)
    const { name, value } = e.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const resetForm = () => {
    setFormState({
      firstName: "",
      lastName: "",
      email: "",
    });
  };

  return (
    <div className="App">
      <form className="form">
        <Input
          label="First Name:"
          value={formState.firstName}
          onChange={handleChange}
          name="firstName"
        />
        <Input
          label="Last Name:"
          value={formState.lastName}
          onChange={handleChange}
          name="lastName"
        />
        <Input
          label="Email Address:"
          value={formState.email}
          onChange={handleChange}
          name="email"
        />
        <button type="button" onClick={resetForm}>
          Reset
        </button>
      </form>
      <div className="display-info">
        <Display message="First Name: " userInput={formState.firstName}/>
        <Display message="Last Name: " userInput={formState.lastName}/>
        <Display message="Email Address: " userInput={formState.email}/>
      </div>
    </div>
  );
}
