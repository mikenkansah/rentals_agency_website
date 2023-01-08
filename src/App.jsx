import "./App.css";
import Hero from "./components/Hero";
import hero from "./assets/hero.png";
import MinimumCost from "./components/MinimumCost";

function App() {
  return (
    <div className="App">
      <Hero hero={hero}/>
      <MinimumCost/>
    </div>
  );
}

export default App;
