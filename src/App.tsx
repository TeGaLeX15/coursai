import { AiCoursesSection } from "./components/AiCoursesSection/AiCoursesSection";
import { Background } from "./components/Background";
import CardSection from "./components/CardSection/CardSection";
import HeroGradient from "./components/Gradient/HeroGradient";
import Header from "./components/Header";
import { Hero } from "./components/Hero";

export default function App() {
  return (
    <div className="relative text-white">
      <Header />
      <Background />
      <Hero />
      <HeroGradient />
      <CardSection />
      <AiCoursesSection />
    </div>
  );
}
