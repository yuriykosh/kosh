import CommentSection from "@/components/CommentSection";
import HeroSection from "@/components/home-page/HeroSection";
import ProjectsSection from "@/components/home-page/ProjectsSection";

export default function Home() {
  return (
    <main className="pt-20">
      <HeroSection />
      <ProjectsSection />
      <CommentSection />
    </main>
  );
}
