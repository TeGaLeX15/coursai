export default function Card() {
  return (
    <div className="bg-white rounded-xl h-auto shadow-lg p-8 flex flex-col justify-between hover:scale-105 transition-transform duration-300">
      <h3 className="text-black text-2xl font-bold mb-4">Карточка</h3>
      <p className="text-gray-600">
        Описание карточки. Можно добавить иконку или картинку.
      </p>
    </div>
  );
}
