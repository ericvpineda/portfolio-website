export default function Nav() {
  return (
    <nav className="flex justify-between items-center py-5">
      <div className="pl-5 text-4xl font-light">Eric Pineda</div>
      <div className="pr-5 flex text-3xl font-light gap-5 items-center">
        <a href="#about" className="nav_links">
          About
        </a>
        <a href="#experience" className="nav_links">
          Experience
        </a>
        <a href="#projects" className="nav_links">
          Projects
        </a>
        <a href="#contact" className="nav_links">
          Contact
        </a>
      </div>
    </nav>
  );
}
