import "./App.css";
import Greeting from "./components/Greeting/Greeting";

function App() {
  return (
    <div className="App">
      <Greeting name="Todd" />
      <Greeting name="Frank" />
    </div>
  );
}

export default App;
