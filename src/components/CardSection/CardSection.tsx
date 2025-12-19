import Card from "../UI/Card";
import { cards } from "../../data/cards";
import SectionGradient from "../Gradient/SectionGradient";

export default function CardSection() {
  return (
    <section
      className="section-base"
      aria-label="Card Section"
    >
      <SectionGradient />
      <div className="card-section-content">
        {cards.map((card) => (
          <Card key={card.id} {...card} />
        ))}
      </div>
    </section>
  );
}
