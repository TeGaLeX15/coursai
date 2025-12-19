import HeroText from "./HeroText";
import HeroForm from "./HeroForm";

export default function Hero() {
  return (
    <section className="section-base" aria-label="Hero Section">
      <img
        className="absolute top-2/3 -left-32 w-1/4 -z-9"
        src="/sec1_bg_thing.png"
        alt=""
        aria-hidden="true"
      />
      <div className="hero-section-content">
        <HeroText />
        <HeroForm />
      </div>
    </section>
  );
}
