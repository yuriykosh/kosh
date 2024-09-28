import Image from "next/image";
import Link from "next/link";

const TeamMember = ({ member }) => {
  return (
    <li className="relative flex flex-col w-full border border-white">
      <Image
        src={member.image}
        alt={`${member.name} picture`}
        className={`object-cover w-auto border-b border-blue h-80 md:h-[356px] lg:h-[499px] mix-blend-luminosity ${member.customStyles}`}
      />
      <div className="flex flex-col gap-1 px-[10px] py-5">
        {member.link === "" ? (
          <p className="leading-5">{member.name}</p>
        ) : (
          <Link className="leading-5 underline" href={member.link}>
            {member.name}
          </Link>
        )}

        <div className="flex flex-col gap-2 leading-5">
          <p className="transition-all">{member.role}</p>
        </div>
      </div>
    </li>
  );
};
export default TeamMember;
