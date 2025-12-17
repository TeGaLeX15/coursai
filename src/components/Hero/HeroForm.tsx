export default function HeroForm() {
  return (
    <div className="w-full md:w-1/2 relative flex justify-center md:justify-end items-stretch z-10">
      <div className="w-full max-w-md bg-neutral-800 rounded-lg flex-1 flex items-stretch relative">
        <div className="p-8 w-full h-full flex flex-col justify-around gap-6">
          <h2 className="text-3xl font-bold text-white text-center">
            ПОМОЖЕМ ПОДОБРАТЬ ОБУЧЕНИЕ
          </h2>
          <form className="flex flex-col gap-4 w-full">
            <input
              type="text"
              placeholder="Ваше имя"
              className="px-4 py-3 rounded-lg bg-neutral-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              placeholder="Email"
              className="px-4 py-3 rounded-lg bg-neutral-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="tel"
              placeholder="Телефон"
              className="px-4 py-3 rounded-lg bg-neutral-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="mt-2 bg-blue-500 hover:bg-blue-600 transition-colors text-white font-bold py-3 rounded-lg cursor-pointer"
            >
              ХОЧУ УЧИТЬСЯ
            </button>
          </form>
          <div className="flex flex-col gap-4 text-gray-300 text-xs">
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" className="w-4 h-4 accent-blue-500" />
              Отправляя заявку, вы даёте согласие на обработку своих персональных данных в соответствии с политикой конфиденциальности и принимаете условия оферты
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" className="w-4 h-4 accent-blue-500" />
              Хочу купить обучение для компании
            </label>
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
