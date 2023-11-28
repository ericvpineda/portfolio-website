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
    <div id="experience" className="section bg-yellow-500 flex-col">
      <div className="text-center mb-10">
        <h2 className="section_text">Journey through my</h2>
        <h1 className="header_title">Experience</h1>
      </div>
      <div className="flex w-full px-20 gap-4">
        <div className="section_border">
          <h3 className="font-semibold text-xl tracking-wide">Frontend</h3>
          <ul className="experience_tech">
            {frontendTech.map((tech) => (
              <li className="whitespace-nowrap">
                <CodeIcon />
                {tech}
              </li>
            ))}
          </ul>
        </div>
        <div className="section_border">
          <h3 className="font-semibold text-xl tracking-wide">
            Backend
          </h3>
          <ul className="experience_tech">
            {backendTech.map((tech) => (
              <li className="whitespace-nowrap">
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
