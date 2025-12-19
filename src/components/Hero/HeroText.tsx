import { heroTags } from "../../data/tags";
import TagIcon from "../UI/TagIcon";

export default function HeroText() {
  return (
    <div className="w-full md:w-1/2 flex flex-col justify-center text-center md:text-left gap-6 z-10">
      <h1 className="text-8xl md:text-8xl mb-4 font-serif text-blue-500">
        COURSAI
      </h1>
      <span className="text-4xl font-bold text-black">КУРСЫ ПО НЕЙРОСЕТЯМ</span>
      <p className="text-base md:text-lg text-gray-800 leading-snug">
        Научитесь использовать нейросети для автоматизации, повышения
        эффективности и креативных решений. Наши курсы подходят для бизнеса,
        маркетинга, аналитики, дизайна и разработки.
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
