"use client";

import { useState } from "react";

import eventPOSpic from "/public/projects/1.png";
import budivelnykpic from "/public/projects/2.png";
import dfpic from "/public/projects/3.png";
import ProjectItem from "./ProjectsItem";
import ProjectImage from "./ProjectImage";

function ProjectsList() {
  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = [
    {
      id: "1",
      name: "EventPOS",
      image: eventPOSpic,
      link: "#projects",
      description:
        "A cutting-edge mobile payment application meticulously crafted to cater specifically to the unique demands of events. In the era where seamless transactions and efficient management are paramount, EventPOS revolutionizes the way of payments are processed and tracked in event environment.",
    },
    {
      id: "2",
      name: "Budivelnyk",
      image: budivelnykpic,
      link: "#projects",
      description:
        "A construction supplies and tools store, expanded its market reach by implementing a robust brand strategy that strengthened its industry presence. A redesigned website further enhanced user experience, driving higher traffic and sales conversions.",
    },
    {
      id: "3",
      name: "DF Druckluft-Fachhandel",
      image: dfpic,
      link: "#projects",
      description:
        "A leading e-commerce platform specializing in comprehensive compressed air solutions. After leading migration to the Atlas Copco Group, the company successfully optimized its user experience, system processes and numbers.",
    },
  ];

  return (
    <>
      <div className="flex-grow hidden w-6/12 lg:flex">
        {hoveredProject && <ProjectImage project={hoveredProject} />}
      </div>

      <div className="flex-col flex-none hidden w-6/12 p-5 border-l lg:flex gap-36 border-blue">
        <h2>Projects</h2>

        <div className="flex flex-col gap-20 grow xl:gap-0">
          <ul className="">
            {projects.map((project) => (
              <ProjectItem
                key={project.id}
                project={project}
                onHover={setHoveredProject}
                onHoverEnd={() => setHoveredProject(null)}
              />
            ))}
            <li className="flex gap-5 items-baseline text-[2.125rem] leading-10 pt-9 text-stroke--blue text-transparent cursor-pointer group/your-product xl:text-[3.313rem] xl:leading-[2.765rem] xl:tracking-[-0.1rem]">
              <ul className="flex gap-5">
                <li className="w-5 h-5 transition-all duration-150 border border-transparent rounded-full bg-blue group-hover/your-product:bg-magenta xl:w-6 xl:h-6"></li>
                <li className="w-5 h-5 border border-transparent rounded-full bg-blue xl:w-6 xl:h-6"></li>
                <li className="w-5 h-5 duration-300 bg-transparent border rounded-full opacity-0 border-blue group-hover/your-product:opacity-100 xl:w-6 xl:h-6"></li>
              </ul>

              <span className="transition-transform duration-300 -translate-x-8 opacity-0 group-hover/your-product:opacity-100 group-hover/your-product:translate-x-0">
                your product
              </span>
            </li>
          </ul>

          <div className="flex flex-col justify-end gap-2 px-5 leading-6 grow">
            {hoveredProject && (
              <p className="text-xl transition-all font-erode animate-slideinUp [--slideinUp-delay:0ms] opacity-0">
                {hoveredProject.description}
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
export default ProjectsList;
