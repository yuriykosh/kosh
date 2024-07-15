"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

function ProjectItem({ project }) {
  // EXPAND/HIDE
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <li className="relative flex flex-col w-full border overflow-clip border-blue">
      <Image
        src={project.image}
        alt={`${project.name} picture`}
        className="object-cover w-auto border-b border-blue h-80"
      />
      <div className="">
        <Link
          className="flex px-[0.625rem] py-5 text-[2.125rem] leading-10 border-b border-blue"
          href={project.link}
        >
          {project.name}
        </Link>
        <div className="flex flex-col gap-2 leading-6 px-[0.625rem] pt-[0.625rem] pb-5">
          <p
            className={`text-xl font-erode transition-all ${
              isExpanded ? "line-clamp-none" : "line-clamp-4"
            }`}
          >
            {project.description}
          </p>

          <button onClick={handleToggle} className="flex underline">
            {isExpanded ? "hide" : "expand"}
          </button>
        </div>
      </div>
    </li>
  );
}
export default ProjectItem;
