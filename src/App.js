import "./App.css";
import About from "./components/About";
import Hero from "./components/Hero";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="max-w-6xl w-full bg-blue-500 min-h-full mx-auto font-display">
      <Nav />
      <Hero/>
      <About/>
    </div>
  );
}

export default App;
