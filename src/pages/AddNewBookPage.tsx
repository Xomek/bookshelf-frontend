import { Button } from '@shared/ui/Button';
import { Input } from '@shared/ui/Input';
import { Upload } from 'lucide-react';

export const AddNewBookPage = () => {
  return (
    <div className="flex-1">
      <label className="block mb-6">
        <span className="block mb-2 font-semibold">Название книги</span>
        <Input placeholder="Война и мир" />
      </label>

      <label className="block mb-6">
        <span className="block mb-2 font-semibold">Описание</span>
        <textarea
          className="h-30 w-full rounded-lg border border-gray-200 p-3 bg-gray-50"
          placeholder="«Война и мир» — масштабный роман-эпопея Льва Толстого, описывающий жизнь русского общества в эпоху Наполеоновских войн (1805–1812 гг.). Через призму судеб нескольких дворянских семей (Ростовых, Болконских, Безуховых) автор показывает переплетение личных драм, любви и разочарований с ключевыми историческими событиями. Главная мысль произведения заключается в изображении «народной войны» и поиске героями истинного смысла жизни и счастья."
        />
      </label>

      <label className="block mb-6">
        <span className="block mb-2 font-semibold">Жанр</span>
        <Input placeholder="Роман, Исторический жанр, Военная проза" />
      </label>

      <label className="block mb-6">
        <span className="block mb-2 font-semibold">Автор</span>
        <Input placeholder="Лев Толстой" />
      </label>

      <label className="block mb-10">
        <span className="block mb-2 font-semibold">Превью обложки</span>
        <div className="bg-gray-100 h-100 rounded-lg justify-center flex flex-col items-center gap-4">
          <Upload size={60} className="text-zinc-400" />
          <span className="text-zinc-400 w-48 text-center">
            Перетащите PDF сюда или нажмите для выбора
          </span>
        </div>
      </label>

      <div className="flex items-center justify-end gap-2">
        <Button>Очистить</Button>
        <Button variant="primary">Добавить в библиотеку</Button>
      </div>
    </div>
  );
};
