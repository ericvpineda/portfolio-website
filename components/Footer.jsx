export default function Footer() {
  return (
    <div className="w-full flex justify-center flex-col items-center">
      <div className="flex justify-center gap-2 md:gap-3">
        <a className="footer_links" href="#about">
          About
        </a>
        <a className="footer_links" href="#experience">
          Experience
        </a>
        <a className="footer_links" href="#projects">
          Projects
        </a>
        <a className="footer_links" href="#contact">
          Contact
        </a>
      </div>
      <div className="section_text mb-2">
        <h4>&#169; 2023 Eric Pineda. No rights reserved.</h4>
      </div>
    </div>
  );
}
