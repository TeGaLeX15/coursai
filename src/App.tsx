// src/App.tsx
import { Background } from "./components/Background";
import { Hero } from "./components/Hero";

export default function App() {
  return (
    <div className="relative text-white">
      <Background />
      <Hero />
    </div>
  );
}
