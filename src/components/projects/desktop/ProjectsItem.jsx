"use client";

import Link from "next/link";

function ProjectItem({ project, onHover, onHoverEnd }) {
  return (
    <li
      className="relative flex w-full "
      onMouseEnter={() => onHover(project)}
      onMouseLeave={onHoverEnd}
    >
      <Link
        className="flex flex-grow items-baseline gap-5 py-4 text-[2.125rem] leading-10 group/product hover:underline hover:underline-offset-[10px] before:w-5 before:h-5 before:border before:border-transparent before:rounded-full before:bg-blue before:opacity-0 hover:before:bg-magenta hover:before:opacity-100 transition-all duration-300"
        href={project.link}
      >
        <span className="transition-transform -translate-x-10 group-hover/product:translate-x-0">
          {project.name}
        </span>
      </Link>
    </li>
  );
}
export default ProjectItem;
