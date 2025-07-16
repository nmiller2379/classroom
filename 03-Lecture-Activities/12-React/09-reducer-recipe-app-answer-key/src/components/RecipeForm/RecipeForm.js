import React, { useReducer } from "react";

// Reducer function to handle form state
const formReducer = (state, action) => {
  switch (action.type) {
    case "SET_NAME":
      return { ...state, name: action.payload };
    case "SET_DESCRIPTION":
      return { ...state, description: action.payload };
    case "RESET":
      return { name: "", description: "" };
    default:
      return state;
  }
};

export default function RecipeForm({ onAddRecipe }) {
  const [formState, dispatch] = useReducer(formReducer, {
    name: "",
    description: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddRecipe(formState.name, formState.description);
    dispatch({ type: "RESET" }); // Reset form fields after submission
  };

  return (
    <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={formState.name}
          onChange={(e) =>
            dispatch({ type: "SET_NAME", payload: e.target.value })
          }
          placeholder="Recipe Name"
        />
      <input
        type="text"
        value={formState.description}
        onChange={(e) =>
          dispatch({ type: "SET_DESCRIPTION", payload: e.target.value })
        }
        placeholder="Description"
      />
      <button type="submit">Add Recipe</button>
    </form>
  );
}
