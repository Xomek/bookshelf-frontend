import { BooksList } from '../components/BooksList';
import { Search } from '@shared/ui/Search';

export const BooksPage = () => {
  return (
    <div className="mx-auto w-full max-w-350 items-center px-4">
      <Search />
      <BooksList />
    </div>
  );
};
