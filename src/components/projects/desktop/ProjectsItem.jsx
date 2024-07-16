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
        className="
        flex flex-grow items-baseline gap-5 py-4 text-[2.125rem] leading-10 xl:text-[3.313rem] xl:leading-[2.765rem] xl:tracking-[-0.1rem]
        group/product hover:underline hover:underline-offset-[0.625rem] 
        before:w-5 before:h-5 before:border before:border-transparent before:rounded-full before:bg-blue before:opacity-0 hover:before:bg-magenta hover:before:opacity-100  xl:before:w-6 xl:before:h-6
        transition-all duration-300 before:transition-opacity before:duration-150
        "
        href={project.link}
      >
        <span className="transition-transform duration-300 -translate-x-10 group-hover/product:translate-x-0">
          {project.name}
        </span>
      </Link>
    </li>
  );
}
export default ProjectItem;
