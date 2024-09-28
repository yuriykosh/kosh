import ProjectItem from "../projects/mobile/ProjectsItem";
import eventPOSpic from "/public/projects/1.png";
import budivelnykpic from "/public/projects/2.png";
import dfpic from "/public/projects/3.png";

const HeroSection = () => {
  const projects = [
    {
      id: "1",
      name: "EventPOS",
      image: eventPOSpic,
      link: "/",
      description:
        "A cutting-edge mobile payment application meticulously crafted to cater specifically to the unique demands of events. In the era where seamless transactions and efficient management are paramount, EventPOS revolutionizes the way of payments are processed and tracked in event environment.",
    },
    {
      id: "2",
      name: "Budivelnyk",
      image: budivelnykpic,
      link: "/",
      description:
        "A cutting-edge mobile payment application meticulously crafted to cater specifically to the unique demands of events. In the era where seamless transactions and efficient management are paramount, EventPOS revolutionizes the way of payments are processed and tracked in event environment.",
    },
    {
      id: "3",
      name: "DF Druckluft-Fachhandel",
      image: dfpic,
      link: "/",
      description:
        "E-commerce for complete compressed air solutions (a part of Atlas Copco Group)",
    },
  ];

  return (
    <section className="pt-20 bg-white text-blue">
      <div className="flex gap-2 p-5 mt-5 ">
        <h2 className="md:pt-1.5 md:pb-1">Projects</h2>
      </div>

      <ul className="flex flex-col flex-wrap w-full gap-5 px-5 pb-20 md:grid md:grid-cols-2 ">
        {projects.map((project) => (
          <ProjectItem key={project.id} project={project} />
        ))}
        <li className="flex flex-col gap-[0.875rem] px-[0.625rem] py-5 text-[2.125rem] leading-10 border border-blue text-stroke--blue text-transparent md:h-fit">
          <ul className="flex gap-5">
            <li className="w-5 h-5 border border-transparent rounded-full bg-magenta"></li>
            <li className="w-5 h-5 border border-transparent rounded-full bg-blue"></li>
            <li className="w-5 h-5 bg-transparent border rounded-full border-blue"></li>
          </ul>
          your product
        </li>
      </ul>
    </section>
  );
};
export default HeroSection;
