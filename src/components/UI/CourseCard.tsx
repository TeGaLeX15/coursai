import { ArrowRight } from "lucide-react";
import type { AiCourse } from "../../data/aiCourses";

interface CourseCardProps {
  course: AiCourse;
}

export function CourseCard({ course }: CourseCardProps) {
  return (
    <div className="relative group h-full">
      <div
        className="
          absolute inset-0
          translate-x-1 translate-y-1
          rounded-2xl
          bg-blue-500
          transition-transform duration-300
          group-hover:translate-x-2 group-hover:translate-y-2
        "
        aria-hidden
      />

      <div
        className="
          relative z-10 h-full
          rounded-2xl bg-white border border-neutral-200
          p-6 flex flex-col justify-between
          transition-all duration-300
          group-hover:-translate-x-1 group-hover:-translate-y-1
        "
      >
        <div className="flex flex-col gap-2">
          <h3 className="text-lg font-semibold text-neutral-900 leading-snug">
            {course.title}
          </h3>

          <div className="h-px w-10 bg-linear-to-r from-indigo-500/70 to-transparent" />

          <p className="text-sm text-neutral-600 leading-relaxed">
            {course.description}
          </p>
        </div>

        <div className="flex flex-col gap-1">
          <p className="text-xs uppercase tracking-wide text-neutral-400">
            Инструменты
          </p>
          <p className="text-sm text-neutral-700 font-medium">{course.tools}</p>
        </div>

        <button
          className="
            inline-flex items-center justify-end gap-2
            text-sm font-medium border-2 rounded-full px-4 py-2
            w-fit ml-auto
            text-blue-500
            hover:text-blue-600 hover:cursor-pointer active:translate-x-1
            transition
        "
        >
          Подробнее
          <span className="transition-transform group-hover:translate-x-1">
            <ArrowRight className="text-blue-500 hover:text-blue-600 w-5" />
          </span>
        </button>
      </div>
    </div>
  );
}
