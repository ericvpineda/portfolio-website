import About from "@components/About";
import Contact from "@components/Contact";
import Experience from "@components/Experience";
import Hero from "@components/Hero";
import Nav from "@components/Nav";
import Projects from "@components/Projects";


export default function Home() {
  return (
    <div className="max-w-7xl w-full min-h-full mx-auto font-display">
      <Nav />
      <Hero/>
      <About/>
      <Experience/>
      <Projects/>
      <Contact/>
    </div>
  )
}
