'use client'
import { useEffect, useState } from 'react';
import axios from "axios";
import Image from "next/image"

export default function Projects() {

  const [projects, setprojects] = useState([])

  const fetchProjects = async () => {

    const query = "/api/projects"
    const {data} = await axios.get(query);
    console.log("DEBUG: data=", data)
    setprojects(data)
  }
  
  useEffect(() => {
    fetchProjects()
  }, [])

  return (
    <div id="projects" className="section flex-col sm:mt-0">
      <div className="text-center mb-10">
        <h2 className="section_text">Wander my recent</h2>
        <h1 className="header_title">Projects</h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-full px-20 gap-4">
        {projects.length > 0 && projects.map(project => (
           <div className="section_border">
          
           {project.image && <Image src={project.image} alt="Project" height={200} width={200} className='w-full ' />}
           
           <h3 className="font-semibold text-xl tracking-wide">{project.name}</h3>
           <div className="flex">
             <button className="hero_button">Github</button>
             <button className="hero_button">Demo</button>
           </div>
         </div>
        ))}
      </div>
    </div>
  );
}
