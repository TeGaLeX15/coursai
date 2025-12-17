import { heroTags } from "../data/data";
import TagIcon from "./UI/TagIcon";

function HeroText() {
  return (
    <div className="w-full md:w-1/2 flex flex-col justify-center text-center md:text-left gap-6 z-10">
      <span className="text-6xl md:text-8xl mb-4 font-serif text-blue-500">
        COURSAI
      </span>

      <h1 className="text-xl md:text-2xl font-bold text-black">
        КУРСЫ ПО НЕЙРОСЕТЯМ
      </h1>

      <p className="text-base md:text-lg text-gray-800 leading-relaxed">
        Научитесь использовать нейросети для автоматизации, повышения
        эффективности и креативных решений. Наши курсы подходят для
        бизнеса, маркетинга, аналитики, дизайна и разработки.
        <br />
        Получите навыки, востребованные на рынке!
      </p>

      <div className="flex flex-wrap gap-2 justify-center md:justify-start">
        {heroTags.map((tag, idx) => (
          <TagIcon key={idx} icon={tag.icon} text={tag.text} />
        ))}
      </div>
    </div>
  );
}

function HeroForm() {
  return (
    <div className="w-full md:w-1/2 relative flex justify-center md:justify-end items-stretch z-10">
      {/* Контейнер формы растягивается на всю высоту колонки */}
      <div className="w-full max-w-md bg-neutral-800 rounded-lg flex-1 flex items-center justify-center">
        <span className="text-gray-500">Form Placeholder</span>
      </div>

      <img
        className="absolute -top-10 left-10 w-40"
        src="/sec1_form_thing.png"
        alt="Decoration"
      />
    </div>
  );
}

export function Hero() {
  return (
    <section
      className="relative overflow-visible pt-16 pb-32 flex justify-center"
      aria-label="Hero Section"
    >
      {/* Фоновые элементы */}
      <img
        className="absolute top-2/3 -left-32 w-1/4 -z-10"
        src="/sec1_bg_thing.png"
        alt=""
        aria-hidden="true"
      />

      {/* Контент */}
      <div className="w-full max-w-[1200px] px-4 flex flex-col md:flex-row items-stretch gap-12 relative z-20">
        <HeroText />
        <HeroForm />
      </div>
    </section>
  );
}
