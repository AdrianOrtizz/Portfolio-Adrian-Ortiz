import Presentation from "./components/Presentation";
import HeroButtons from "./components/HeroButtons";

const HeroSection = () => {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center px-4 py-20 text-center w-full overflow-hidden">
      <Presentation />
      <HeroButtons />
    </section>
  );
};

export default HeroSection;
