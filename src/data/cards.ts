export type CardDifficulty = 1 | 2 | 3;

export interface CardData {
  id: number;
  difficulty: CardDifficulty;
  title: string;
  description?: string;
  features: string[];
  link: string;
  image: string;
}

export const cards: CardData[] = [
  {
    id: 1,
    difficulty: 1,
    title: "AI с нуля",
    description:
      "Погружение в основы искусственного интеллекта без технического бэкграунда.",
    features: [
      "Что такое AI и нейросети",
      "Как работает ChatGPT",
      "Где AI уже используется",
      "Практика без кода",
    ],
    link: "#",
    image: "/cards/sec2_card5.png",
  },
  {
    id: 2,
    difficulty: 2,
    title: "AI для бизнеса",
    description:
      "Использование нейросетей для автоматизации задач и роста эффективности.",
    features: [
      "Автоматизация рутинных процессов",
      "AI в маркетинге и продажах",
      "Работа с текстами и данными",
      "Интеграция AI в бизнес",
    ],
    link: "#",
    image: "/cards/sec2_card2.png",
  },
  {
    id: 3,
    difficulty: 2,
    title: "AI для креативных профессий",
    description:
      "Нейросети как инструмент для дизайнеров, маркетологов и контент-креаторов.",
    features: [
      "Генерация изображений",
      "Создание контента",
      "Работа с видео и аудио",
      "Креативные AI-инструменты",
    ],
    link: "#",
    image: "/cards/sec2_card6.png",
  },
  {
    id: 4,
    difficulty: 3,
    title: "Продвинутый AI",
    description:
      "Глубокое понимание возможностей AI и сценариев его кастомного применения.",
    features: [
      "Сложные AI-сценарии",
      "Prompt engineering",
      "AI-агенты и пайплайны",
      "Оптимизация и масштабирование",
    ],
    link: "#",
    image: "/cards/sec2_card7.png",
  },
];
