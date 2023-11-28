export default function Projects() {
  return (
    <div id="projects" className="section flex-col">
      <div className="text-center mb-10">
        <h2 className="section_text">Wander my recent</h2>
        <h1 className="header_title">Projects</h1>
      </div>

      <div className="grid grid-cols-3 w-full px-20 gap-4">
        <div className="section_border">
          <img src="" alt="Project" />
          <h3 className="font-semibold text-xl tracking-wide">Backend</h3>
          <div className="flex">
            <button className="hero_button">Github</button>
            <button className="hero_button">Demo</button>
          </div>
        </div>
      </div>
    </div>
  );
}
