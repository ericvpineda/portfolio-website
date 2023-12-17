"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Watch } from "react-loader-spinner";

export default function Projects() {
  const [projects, setprojects] = useState([]);

  const fetchProjects = async () => {
    const query = "/api/projects";
    const response = await fetch(query, { method: "GET", cache: "no-store" });
    if (response.ok) {
      const data = await response.json();
      setprojects(data);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <div
      id="projects"
      className="flex justify-center items-center w-full flex-col md:mb-22"
    >
      <div className="text-center mb-10">
        <h2 className="section_text">Wander my recent</h2>
        <h1 className="header_title">Projects</h1>
      </div>

      {projects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full px-5 gap-4">
          {projects.map((project, index) => (
            <div key={index} className="section_border">
              {project.image ? (
                <a href={project.url} className="cursor-pointer">
                  <Image
                    priority={true}
                    src={project.image}
                    alt="Project"
                    height={800}
                    width={800}
                    className="rounded-lg project_images object-cover"
                  />
                </a>
              ) : (
                <div className="flex justify-center items-center rounded-lg project_images bg-black">
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
