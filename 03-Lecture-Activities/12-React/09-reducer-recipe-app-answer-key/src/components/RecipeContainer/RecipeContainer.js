// App.js
import React, { useReducer } from "react";
import AddRecipeForm from "../RecipeForm/RecipeForm";
import RecipeList from "../RecipeList/RecipeList";

// Initial state of the app, defining the structure of our recipes data
const initialState = {
  recipes: [], // Array to store each recipe object
};

// Reducer function to manage state transitions based on dispatched actions
const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_RECIPE":
      // Handles adding a new recipe to the state
      return {
        ...state,
        recipes: [...state.recipes, action.payload], // Adds new recipe to the recipes array
      };
    default:
      // Returns the current state if no known action is dispatched
      return state;
  }
};

// Main component of the application
export default function RecipeContainer() {
  // useReducer hook to apply the reducer logic on the defined initial state
  const [state, dispatch] = useReducer(reducer, initialState);

  // Function to handle adding a new recipe, dispatched when a recipe is submitted
  const addRecipe = (name, description) => {
    // Dispatch an action with the new recipe data as payload
    dispatch({ type: "ADD_RECIPE", payload: { name, description } });
  };

  return (
    <>
      {/* Component to add new recipes, passing the addRecipe function as props */}
      <AddRecipeForm onAddRecipe={addRecipe} />
      {/* Component to list all recipes, passing the recipes array as props */}
      <RecipeList recipes={state.recipes} />
    </>
  );
}
