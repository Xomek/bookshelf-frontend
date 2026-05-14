import { Header } from '../components/Header';
import { BooksList } from '../components/BooksList';
import { Search } from '@shared/components/ui/Search';

export const BooksPage = () => {
  return (
    <div>
      <Header />
      <div className="mx-auto w-full max-w-350 items-center px-4">
        <Search />
        <BooksList />
      </div>
    </div>
  );
};
