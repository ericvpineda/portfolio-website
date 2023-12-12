import hiking from "@public/img/hiking.jpg";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import SchoolIcon from "@mui/icons-material/School";
import Image from "next/image"

export default function About() {
  return (
    <div id="about" className="section flex-col mt-40 sm:mt-10 mb-56 sm:mb-0">
      <div className="text-center mb-10">
        <h2 className="section_text">Get to know more</h2>
        <h1 className="header_title">About Me</h1>
      </div>

      <div className="flex items-center gap-5 px-12 flex-col sm:flex-row">
        <Image
          src={hiking}
          alt=""
          className="object-cover max-h-64 min-h-[16rem] max-w-[16rem] sm:min-h-[19rem] sm:max-w-[19rem] md:min-h-[22rem] md:max-w-[22rem] rounded-2xl"
        />

        <div className="flex flex-col justify-center h-full">
          <div className="flex flex-col sm:flex-row  justify-center gap-5 mb-5">
            <div className="section_border">
              <WorkspacePremiumIcon />
              <div className="text-center">
                <h3 className="font-semibold text-xl tracking-wide">
                  Experience
                </h3>
                <p className="section_text">1+ years</p>
                <p className="section_text">Full Stack Development</p>
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
