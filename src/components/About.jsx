import hiking from "../public/img/hiking.jpg";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import SchoolIcon from "@mui/icons-material/School";

export default function About() {
  return (
    <div className="section bg-red-600 flex-col">
      <div className="text-center">
        <h2 className="section_text">Get to know more</h2>
        <h1 className="header_title">About Me</h1>
      </div>

      <div className="flex items-center gap-5 px-12">
        <img
          src={hiking}
          alt=""
          className="object-cover max-h-64 min-h-[16rem] max-w-[16rem] rounded-2xl"
        />

        <div className="flex flex-col justify-center">
          <div className="flex justify-center gap-5">
            <div className="section_border">
              <WorkspacePremiumIcon />
              <div className="text-center">
                <h3 className="font-semibold text-xl tracking-wide">
                  Experience
                </h3>
                <p className="section_text">1+ years</p>
                <p className="section_text">FullStack Development</p>
              </div>
            </div>
            <div className="section_border">
              <SchoolIcon />
              <div className="text-center">
                <h3 className="font-semibold text-xl tracking-wide">
                  Education
                </h3>
                <p className="section_text">B.Ac Bachelors Degree</p>
                <p className="section_text">B.Ap Bachelors Degree</p>
              </div>
            </div>
          </div>
          <div className="section_text">
            <p className="break-words">
              Hi👋! I'm Eric (He/him/his), average coder during the day and aspiring youtuber at nite. I am a recent graduate from the <span className="italic">University of California, Berkeley</span> and I am a Full Stack Developer. I enjoy making projects that positively impact others in health and psychology.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
