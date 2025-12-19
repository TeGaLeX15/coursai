export interface AiCourse {
  title: string;
  description: string;
  tools: string;
}

export const aiCourses: AiCourse[] = [
  {
    title: "Нейросети для изображений и креатива",
    description: "Профессиональная генерация изображений и иллюстраций",
    tools: "Midjourney, Stable Diffusion, DALL·E, Kandinsky, Shedevrum",
  },
  {
    title: "Создание ИИ-чат бота за 1 час",
    description: "Создание ботов без программирования",
    tools: "Chatfuel, ManyChat, Botsonic",
  },
  {
    title: "Нейросети для видео",
    description: "Создание профессиональных роликов и видео",
    tools: "Runway, Sora, ImagineArt, Kandinsky, Shedevrum",
  },
];
