import eventPOSpic from "/public/projects/1.png";
import ProjectItem from "./ProjectsItem";

function ProjectsList() {
  const projects = [
    {
      id: "1",
      name: "EventPOS",
      image: eventPOSpic,
      link: "/",
      description:
        "A cutting-edge mobile payment application meticulously crafted to cater specifically to the unique demands of events. In the era where seamless transactions and efficient management are paramount, EventPOS revolutionises the way of payments are processed and tracked in event environment.",
    },
    {
      id: "2",
      name: "Budivelnyk",
      image: eventPOSpic,
      link: "/",
      description:
        "A cutting-edge mobile payment application meticulously crafted to cater specifically to the unique demands of events. In the era where seamless transactions and efficient management are paramount, EventPOS revolutionises the way of payments are processed and tracked in event environment.",
    },
    {
      id: "3",
      name: "DF Druckluft-Fachhandel",
      image: eventPOSpic,
      link: "/",
      description:
        "A cutting-edge mobile payment application meticulously crafted to cater specifically to the unique demands of events. In the era where seamless transactions and efficient management are paramount, EventPOS revolutionises the way of payments are processed and tracked in event environment.",
    },
  ];

  return (
    <>
      <ul className="flex flex-col w-full gap-5 px-5 pb-5 ">
        {projects.map((project) => (
          <ProjectItem key={project.id} project={project} />
        ))}
        <li className="flex flex-col gap-[0.875rem] px-[0.625rem] py-5 text-[2.125rem] leading-10 border border-blue text-stroke--blue text-transparent">
          <ul className="flex gap-5">
            <li className="w-5 h-5 border border-transparent rounded-full bg-magenta"></li>
            <li className="w-5 h-5 border border-transparent rounded-full bg-blue"></li>
            <li className="w-5 h-5 bg-transparent border rounded-full border-blue"></li>
          </ul>
          your product
        </li>
      </ul>
    </>
  );
}
export default ProjectsList;
