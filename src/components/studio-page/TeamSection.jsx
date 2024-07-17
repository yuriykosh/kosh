import TeamMember from "./team/TeamMember";
import yuriyPic from "/public/team/anna.webp";
import annaPic from "/public/team/anna.webp";
import dmytroPic from "/public/team/anna.webp";

const TeamSection = () => {
  const team = [
    {
      id: "1",
      name: "Yuriy Koshyk",
      image: yuriyPic,
      link: "https://yuriykoshyk.com/",
      role: "(Product Designer & Founder)",
    },
    {
      id: "2",
      name: "Anna Seheda",
      image: annaPic,
      link: "",
      role: "(Art Director & Motion Designer)",
    },
    {
      id: "3",
      name: "Dmytro Lytvynenko",
      image: dmytroPic,
      link: "",
      role: "(Full-stack Developer) ",
    },
  ];
  return (
    <section className="pb-32">
      <div className="flex gap-2 p-5 border-b border-white">
        <h2>Meet our team:</h2>
      </div>
      <ul className="grid grid-cols-2 gap-x-[10px] gap-y-5 p-5 border-b border-white">
        {team.map((member) => (
          <TeamMember key={member.id} member={member} />
        ))}
      </ul>
      <div className="flex flex-col gap-8 mt-5 p-5 text-xl font-erode xl:text-[26px] xl:leading-[32px]">
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
