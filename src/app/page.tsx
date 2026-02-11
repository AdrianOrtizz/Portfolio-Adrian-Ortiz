import HeroSection from "@/components/sections/HeroSection";
import Projects from "@/components/sections/Projects/Projects";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <HeroSection />
      <Projects />
    </main>
  );
}
