import Presentation from "./components/Presentation";
import HeroButtons from "./components/HeroButtons";

const HeroSection = () => {
  return (
    <section className="relative flex mt-[-10vh] min-h-[90vh] flex-col items-center justify-center px-6 py-20 text-center h-screen w-screen">
      <Presentation />
      <HeroButtons />
    </section>
  );
};

export default HeroSection;
