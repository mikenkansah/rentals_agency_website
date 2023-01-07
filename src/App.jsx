import "./App.css";
import Hero from "./components/Hero";
import hero from "./assets/hero.png";

function App() {
  return (
    <div className="App">
      <Hero hero={hero}/>
    </div>
  );
}

export default App;
