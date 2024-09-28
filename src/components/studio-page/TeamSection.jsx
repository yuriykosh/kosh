import TeamMember from "./team/TeamMember";
import yuriyPic from "/public/team/yuriy.webp";
import annaPic from "/public/team/anna.webp";
import dmytroPic from "/public/team/dmytro.webp";

const TeamSection = () => {
  const team = [
    {
      id: "1",
      name: "Yuriy Koshyk",
      image: yuriyPic,
      link: "https://yuriykoshyk.com/",
      role: "(Product Designer & Founder)",
      customStyles: "",
    },
    {
      id: "2",
      name: "Anna Seheda",
      image: annaPic,
      link: "",
      role: "(Art Director & Motion Designer)",
      customStyles: "",
    },
    {
      id: "3",
      name: "Dmytro Lytvynenko",
      image: dmytroPic,
      link: "",
      role: "(Full-stack Developer) ",
      customStyles: "",
    },
  ];
  return (
    <section className="pb-32">
      <div className="flex gap-2 p-5 border-b border-white">
        <h2 className="md:pt-1.5 md:pb-1">Meet our team:</h2>
      </div>
      <ul className="grid grid-cols-2 md:grid-cols-3 md:gap-5 gap-x-[10px] gap-y-5 p-5 border-b border-white">
        {team.map((member) => (
          <TeamMember key={member.id} member={member} />
        ))}
      </ul>
      <div className="flex flex-col md:w-8/12 md:ml-auto md:mt-0 gap-8 mt-5 p-5 text-xl font-erode xl:text-[26px] xl:leading-[32px]">
        <p>
          Our team embodies a meticulous and thoughtful approach to every
          project. We continuously distill ideas to convey complex concepts
          simply and effectively.
        </p>
        <p>
          Our process encompasses rigorous research, strategic planning,
          creative conceptualization, dynamic design, motion graphics expertise,
          and development finish. Each team member brings a unique blend of
          creativity and expertise to ensure every project exceeds expectations
          and delivers exceptional results.
        </p>
      </div>
    </section>
  );
};
export default TeamSection;
