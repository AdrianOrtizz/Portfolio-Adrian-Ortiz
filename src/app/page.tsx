import HeroSection from "@/components/sections/HeroSection";
import Projects from "@/components/sections/Projects/Projects";
import Experience from "@/components/sections/Experience/Experience";
import Skills from "@/components/sections/Skills/Skills";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <HeroSection />
      <Projects />
      <Experience />
      <Skills />
    </main>
  );
}
