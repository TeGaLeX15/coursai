interface TagIconProps {
  icon: string;
  text: string;
}

export default function TagIcon({ icon, text }: TagIconProps) {
  return (
    <div className="flex items-center gap-2 bg-neutral-800 text-white px-2 py-2 rounded-lg">
      <img src={icon} alt={text} className="w-5 h-5" />
      <span>{text}</span>
    </div>
  );
}
