"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import { Watch } from "react-loader-spinner";

export default function Projects() {
  const [projects, setprojects] = useState([]);

  const fetchProjects = async () => {
    const query = "/api/projects";
    const { data } = await axios.get(query);
    setprojects(data);
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <div
      id="projects"
      className="flex justify-center items-center w-full min-h-[60rem] md:-mt-14 mb-56 flex-col"
    >
      <div className="text-center mb-10">
        <h2 className="section_text">Wander my recent</h2>
        <h1 className="header_title">Projects</h1>
      </div>

      {projects.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-full px-10 gap-4">
          {projects.map((project) => (
            <div className="section_border">
              {project.image ? (
                <Image
                  priority={true}
                  src={project.image}
                  alt="Project"
                  height={500}
                  width={500}
                  className="rounded-lg min-w-[12rem] max-w-[12rem] min-h-[12rem] max-h-[12rem] object-cover"
                />
              ) : (
                <div className="flex justify-center items-center rounded-lg min-w-[12rem] max-w-[12rem] min-h-[12rem] max-h-[12rem] bg-black">
                  <div className="text-white">Image to be made...</div>
                </div>
              )}

              <h3 className="text-[#495057] my-3 font-semibold text-xl tracking-wide">
                {project.name}
              </h3>
              <div className="flex gap-3">
                <a href={project.url} className="hero_button hero_button_hover">
                  Github
                </a>
                {/* <button className="hero_button">Demo</button> */}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <Watch
          height="80"
          width="80"
          radius="48"
          color="#b9182f"
          ariaLabel="watch-loading"
          wrapperStyle={{}}
          wrapperClassName=""
          visible={true}
        />
      )}
    </div>
  );
}
