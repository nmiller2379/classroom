// App.js
import "./App.css";
import Game from "./components/Game/Game";
import Hero from "./components/Hero/Hero";

function App() {
  return (
    <>
      <Hero />
      <div className="game-container">
        <Game />
      </div>
    </>
  );
}

export default App;
