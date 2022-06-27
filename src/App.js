import "./App.css";
import ColapsibleList from "./components/ColapsibleList";
import Counter from "./components/Counter";
import Sum from "./components/Sum";

function App() {
  return (
    <div className="App">
      <Counter />
      <Sum />
      <ColapsibleList title={"Lead Owner"} />
    </div>
  );
}

export default App;
