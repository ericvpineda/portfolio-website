import "./App.css";
import About from "./components/About";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="max-w-6xl w-full bg-blue-500 min-h-full mx-auto font-display">
      <Nav />
      <Hero/>
      <About/>
      <Experience/>
      <Projects/>
    </div>
  );
}

export default App;
