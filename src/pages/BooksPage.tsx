import { BooksList } from '../components/BooksList';
import { Search } from '@shared/ui/Search';

export const BooksPage = () => {
  return (
    <div className="flex flex-col flex-1 mx-auto w-full max-w-350 px-4">
      <Search />
      <BooksList />
    </div>
  );
};
