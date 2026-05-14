import { Book } from './Book';

export const BooksList = () => {
  const books = [1];

  if (!books.length) {
    return (
      <div className="flex flex-1 items-center justify-center">
        <span className="text-zinc-500">
          Пока что не добавлено ни одной книги
        </span>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-6">
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </div>
  );
};
