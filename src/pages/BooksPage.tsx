import { useHeader } from '@shared/providers/header/useHeader';
import { BooksList } from '../components/BooksList';
import { Search } from '@shared/ui/Search';

export const BooksPage = () => {
  useHeader({ title: 'Моя библиотека', subtitle: '6 книг в коллекции' });

  return (
    <div className="flex flex-col flex-1">
      <Search />
      <BooksList />
    </div>
  );
};
