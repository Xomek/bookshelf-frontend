import { BooksList } from '../components/BooksList';
import { Search } from '@shared/ui/Search';

export const BooksPage = () => {
  return (
    <div className="flex flex-col flex-1">
      <Search />
      <BooksList />
    </div>
  );
};
