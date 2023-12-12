export default function Nav() {
  return (
    <nav className="flex justify-between items-center py-10 px-3">
      <div className="pb-2 pl-5 text-3xl font-normal">Eric Pineda</div>
      <div className="pr-5 flex text-2xl font-light gap-5 items-center">
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
