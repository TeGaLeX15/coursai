import SectionGradient from "../Gradient/SectionGradient";
import Card from "../UI/Card";

export default function CardSection() {
  return (
    <section
      className="relative overflow-visible py-32 flex justify-center"
      aria-label="Card Section"
    >
      <div className="grid grid-cols-2 grid-rows-2 gap-8 max-w-6xl w-full">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>

      <SectionGradient />
    </section>
  );
}
