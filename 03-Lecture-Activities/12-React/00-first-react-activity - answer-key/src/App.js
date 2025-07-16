// Todo:
// 1. Create a header component and import it into this App.js file and use it here. The h1 should say React.js
// 2. Add a fourth tab labelled React vs JS that renders the content in the fourth array as a fourth tab on our page.

// Importing necessary modules and components
import { useState } from "react";
import logo from "./logo.svg"; // Importing logo image
import "./App.css"; // Importing CSS for styling
import Header from "./Header/Header"; // Importing Header component

// Content for each tab
const content = [
  [
    "React is extremely popular",
    "It makes building complex, interactive UIs a breeze",
    "It's powerful & flexible",
    "It has a very active and versatile ecosystem",
  ],
  [
    "Components, JSX & Props",
    "State",
    "Hooks (e.g., useEffect())",
    "Dynamic rendering",
  ],
  [
    "Official web page (react.dev)",
    "Next.js (Fullstack framework)",
    "React Native (build native mobile apps with React)",
  ],
  [
    "Vanilla JavaScript requires imperative programming",
    "Imperative Programming: You define all the steps needed to achieve a result",
    "React on the other hand embraces declarative programming",
    "With React, you define the goal and React figures out how to get there",
  ],
];

// Main App component
export default function App() {
  // State to track the active tab index
  const [activeContentIndex, setActiveContentIndex] = useState(0);

  return (
    <div>
      {/* Header section */}
      <header>
        <img src={logo} alt="React logo" /> {/* Displaying React logo */}
        <div>
          <Header /> {/* Rendering Header component */}
          <p>i.e., using the React library for rendering the UI</p>
        </div>
      </header>

      {/* Tabs section */}
      <div id="tabs">
        <menu>
          {/* Buttons to switch between tabs */}
          <button
            className={activeContentIndex === 0 ? "active" : ""}
            onClick={() => setActiveContentIndex(0)}
          >
            Why React?
          </button>
          <button
            className={activeContentIndex === 1 ? "active" : ""}
            onClick={() => setActiveContentIndex(1)}
          >
            Core Features
          </button>
          <button
            className={activeContentIndex === 2 ? "active" : ""}
            onClick={() => setActiveContentIndex(2)}
          >
            Related Resources
          </button>
          <button
            className={activeContentIndex === 3 ? "active" : ""}
            onClick={() => setActiveContentIndex(3)}
          >
            React vs. JS
          </button>
        </menu>
        {/* Content display area */}
        <div id="tab-content">
          <ul>
            {/* Displaying content based on the active tab */}
            {content[activeContentIndex].map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

