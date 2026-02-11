import HeroSection from "@/components/sections/HeroSection";
import Projects from "@/components/sections/Projects/Projects";
import Experience from "@/components/sections/Experience/Experience";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <HeroSection />
      <Projects />
      <Experience />
    </main>
  );
}
