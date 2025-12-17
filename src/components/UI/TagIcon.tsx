interface TagIconProps {
  icon: string;
  text: string;
}

export default function TagIcon({ icon, text }: TagIconProps) {
  const isSvg = icon.toLowerCase().endsWith(".svg");

  return (
    <div className="group flex items-center gap-2 bg-neutral-800 text-white px-2 py-2 rounded-lg hover:bg-neutral-700 hover:shadow-lg transition-all duration-200 transform hover:scale-105">
      {isSvg ? (
        <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
          <img src={icon} alt={text} className="w-3 h-3" />
        </div>
      ) : (
        <img src={icon} alt={text} className="w-5 h-5" />
      )}
      <span>{text}</span>
    </div>
  );
}
