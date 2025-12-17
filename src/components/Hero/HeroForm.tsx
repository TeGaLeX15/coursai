export default function HeroForm() {
  return (
    <div className="w-full md:w-1/2 relative flex justify-center md:justify-end items-stretch z-10">
      <div className="w-full max-w-md bg-neutral-800 rounded-lg flex-1 flex items-center justify-center relative">
        <div className="p-8 w-full h-full">
          <div className="flex flex-col">
            <h2 className="text-3xl font-bold mb-6 text-white text-center">
              ПОМОЖЕМ ПОДОБРАТЬ ОБУЧЕНИЕ
            </h2>
          </div>
        </div>
        <img
          className="absolute -top-20 -left-20 w-40"
          src="/sec1_form_thing.png"
          alt="Decoration"
        />
      </div>
    </div>
  );
}
