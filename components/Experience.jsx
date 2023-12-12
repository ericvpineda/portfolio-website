import CodeIcon from "@mui/icons-material/Code";
import CodeOffIcon from "@mui/icons-material/CodeOff";

export default function Experience() {
  const frontendTech = [
    "Javascript",
    "TypeScript",
    "React",
    "HTML/CSS",
    "Tailwind",
    "jQuery",
    "Python",
    "Java",
  ];

  const backendTech = [
    "NodeJS",
    "Django",
    "NextJS",
    "Mongoose",
    "Express",
    "PostGreSQL",
    "Prisma",
    "AWS",
  ];

  return (
    <div id="experience" className="section flex-col mb-5 px-10 mt-56 sm:mt-0">
      <div className="text-center mb-10">
        <h2 className="section_text">Journey through my</h2>
        <h1 className="header_title">Experience</h1>
      </div>
      <div className="flex w-full gap-4 flex-col sm:flex-row">
        <div className="section_border">
          <h3 className="font-semibold text-3xl tracking-wide text-[#495057]">Frontend</h3>
          <ul className="experience_tech">
            {frontendTech.map((tech) => (
              <li className="whitespace-nowrap experience_tech_item">
                <CodeIcon />
                {tech}
              </li>
            ))}
          </ul>
        </div>
        <div className="section_border">
          <h3 className="font-semibold text-3xl tracking-wide text-[#495057]">
            Backend
          </h3>
          <ul className="experience_tech">
            {backendTech.map((tech) => (
              <li className="whitespace-nowrap experience_tech_item">
                <CodeOffIcon />
                {tech}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
