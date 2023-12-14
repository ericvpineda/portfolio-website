import selfImage from "@public/img/self.JPG";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { IconButton } from "@mui/material";
import Image from "next/image";
import DotGrid from "./DotGrid";

export default function Hero() {
  return (
    <div className="-z-20 section mt-5 md:mt-0 overflow-hidden">
      <div className="z-0 relative grid place-content-center">
        <DotGrid />
        <div className="flex flex-col md:flex-row justify-center items-center gap-20 mt-10 sm:mt-0">
          <Image
            className="z-10 hero_image_profile"
            src={selfImage}
            alt="self"
          />
          <div className="z-10 text-center bg-white rounded-full p-8">
            <p className="font-semibold text-md md:font-medium md:text-lg text-[#495057] tracking-tight">
              Welcome, I'm
            </p>
            <p className="header_title">Eric Pineda</p>
            <p className="mb-3 md:mb-4 font-medium text-3xl md:text-4xl tracking-tighter text-[#495057]">
              Full Stack Developer
            </p>
            <div className="mb-1 flex justify-center gap-4">
              <a
                href="/files/resume.pdf"
                className="hero_button bg-[#b9182f] hover:bg-[#9e2a2b] text-white"
              >
                Resume
              </a>
              <a href="#contact" className="hero_button hero_button_hover">
                Contact
              </a>
            </div>
            <div>
              <IconButton href="https://www.linkedin.com/in/ericvpineda">
                <LinkedInIcon
                  sx={{ height: "3rem", width: "3rem", color: "#343a40" }}
                />
              </IconButton>
              <IconButton href="https://github.com/ericvpineda">
                <GitHubIcon
                  sx={{ height: "2.5rem", width: "2.5rem", color: "#343a40" }}
                />
              </IconButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
