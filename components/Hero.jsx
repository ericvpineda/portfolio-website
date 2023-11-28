import selfImage from "@public/img/self.JPG";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { IconButton } from "@mui/material";
import Image from "next/image"

export default function Hero() {
  return (
    <div className="section bg-green-400">
      <div className="flex justify-center items-center gap-10">
        <Image className="max-h-64 max-w-[16rem] rounded-full" src={selfImage} alt="self" />
        <div className="text-center">
          <p className="font-medium text-lg">Hi, I'm</p>
          <p className="header_title">Eric Pineda</p>
          <p className="font-medium text-4xl">Full Stack Developer</p>
          <div className="flex justify-center gap-4">
            <button className="hero_button">Resume</button>
            <button className="hero_button">Contact</button>
          </div>
          <div>
            <IconButton>
              <LinkedInIcon sx={{ height: "3rem", width: "3rem" }} />
            </IconButton>
            <IconButton>
              <GitHubIcon sx={{ height: "2.5rem", width: "2.5rem" }} />
            </IconButton>
          </div>
        </div>
      </div>
    </div>
  );
}
