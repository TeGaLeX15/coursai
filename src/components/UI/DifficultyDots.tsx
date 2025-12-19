export function DifficultyDots({ level }: { level: 1 | 2 | 3 }) {
  return (
    <div className="flex gap-2">
      {[1, 2, 3].map((dot) => (
        <span
          key={dot}
          className={`w-2 h-2 rounded-full ${
            dot <= level ? "bg-blue-500" : "bg-gray-300"
          }`}
        />
      ))}
    </div>
  );
}
