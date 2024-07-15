import ProjectsListMobile from "../projects/mobile/ProjectsList";
import ProjectsListDesktop from "../projects/desktop/ProjectsList";

function Projects() {
  return (
    <>
      <section
        id="products"
        className="w-full py-5 bg-white text-blue lg:flex lg:p-0 lg:h-[751px] lg:drop-shadow-3xl"
      >
        <ProjectsListMobile />
        <ProjectsListDesktop />
      </section>
    </>
  );
}
export default Projects;
