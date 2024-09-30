import Image from "next/image";

const ProjectImage = ({ project }) => {
  return (
    <>
      <div className="relative w-full aspect-[4/3]">
        <Image
          src={project.image}
          alt={`${project.name} picture`}
          placeholder="blur"
          fill
          sizes="50vw"
          className="object-cover animate-enter [--enter-delay:0ms] opacity-0"
        />
      </div>
    </>
  );
};
export default ProjectImage;
