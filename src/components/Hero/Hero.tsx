import HeroText from "./HeroText";
import HeroForm from "./HeroForm";

export default function Hero() {
  return (
    <section
      className="relative overflow-visible pt-16 pb-32 flex justify-center"
      aria-label="Hero Section"
    >
      <img
        className="absolute top-2/3 -left-32 w-1/4 -z-10"
        src="/sec1_bg_thing.png"
        alt=""
        aria-hidden="true"
      />
      <div className="w-full max-w-300 px-4 flex flex-col md:flex-row items-stretch gap-12 relative z-20">
        <HeroText />
        <HeroForm />
      </div>
    </section>
  );
}
