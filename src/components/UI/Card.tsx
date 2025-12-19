import type { CardDifficulty } from "../../data/cards";
import { DifficultyDots } from "./DifficultyDots";
import { SquareArrowOutUpRight } from "lucide-react";

interface CardProps {
  difficulty: CardDifficulty;
  title: string;
  description?: string;
  features: string[];
  link: string;
  image: string;
}

export default function Card({
  difficulty,
  title,
  description,
  features,
  link,
  image,
}: CardProps) {
  return (
    <div className="relative bg-white rounded-xl shadow-lg p-8 overflow-hidden">
      <div className="flex items-center justify-between mb-6 relative z-10">
        <div className="flex items-center gap-3 border-blue-500 rounded-full border-2 px-4 py-2 bg-white">
          <span className="text-sm text-blue-700">Сложность</span>
          <DifficultyDots level={difficulty} />
        </div>
        <a
          href={link}
          className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-500 hover:bg-blue-700 transition"
          aria-label="Перейти"
        >
          <SquareArrowOutUpRight className="text-white" />
        </a>
      </div>
      <h3 className="text-2xl font-bold text-black mb-3">{title}</h3>
      <div className="relative z-10 pr-22">
        {description && <p className="text-gray-600 mb-4">{description}</p>}
        <ul className="list-disc list-inside space-y-1 text-gray-700">
          {features.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
      <img
        src={image}
        alt=""
        className="absolute bottom-0 right-0 w-40 opacity-90 pointer-events-none select-none"
      />
    </div>
  );
}
