// src/components/Background.tsx
export function Background() {
  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden">
      <img
        src="/gif/bg_grey_grid.gif"
        alt="Site-wide background"
        className="w-full h-full object-cover"
      />
    </div>
  );
}
