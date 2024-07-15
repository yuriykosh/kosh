import Image from "next/image";

const ProjectImage = ({ project }) => {
  return (
    <>
      <Image
        src={project.image}
        alt={`${project.name} picture`}
        className="object-cover w-auto h-[751px]"
      />
    </>
  );
};
export default ProjectImage;
