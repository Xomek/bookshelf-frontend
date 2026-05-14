import { Book } from './Book';

export const BooksList = () => {
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
