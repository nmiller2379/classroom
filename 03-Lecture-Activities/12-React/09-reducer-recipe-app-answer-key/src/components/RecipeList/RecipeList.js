import React from "react";

export default function RecipeList({ recipes }) {
  return (
    <ul>
      {recipes.map((recipe, index) => (
        <li key={index}>
          {recipe.name}: {recipe.description}
        </li>
      ))}
    </ul>
  );
}
