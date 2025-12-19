import { aiCourses } from "../../data/aiCourses";
import { CourseCard } from "../UI/CourseCard";

export function AiCoursesSection() {
  return (
    <section className="section-base">
      <div className="ai-courses-section">
        <h2 className="text-3xl text-black font-bold mb-10">
          МИНИ-КУРСЫ ДЛЯ ЗНАКОМСТВА С НЕЙРОСЕТЯМИ
        </h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {aiCourses.map((course, idx) => (
            <CourseCard key={idx} course={course} />
          ))}
        </div>
      </div>
    </section>
  );
}
