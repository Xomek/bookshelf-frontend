import { useState } from 'react';
import { useHeader } from '@shared/providers/header/useHeader';
import { useBooks } from '@shared/providers/books/useBooks';
import { BooksList } from '../components/BooksList';
import { Search } from '@shared/ui/Search';
import { Tabs } from '@shared/ui/Tabs';
import { BookStatus } from '@shared/types/book-status.type';
import { BOOK_STATUS_LABELS } from '@shared/constants/book-status';

type TabValue = 'all' | BookStatus;

const TABS: { value: TabValue; label: string }[] = [
  { value: 'all', label: 'Все' },
  ...(Object.keys(BOOK_STATUS_LABELS) as BookStatus[]).map((value) => ({
    value,
    label: BOOK_STATUS_LABELS[value],
  })),
];

export const BooksPage = () => {
  const { books } = useBooks();

  useHeader({
    title: 'Моя библиотека',
    subtitle: `${books.length} ${books.length === 1 ? 'книга' : books.length < 5 ? 'книги' : 'книг'} в коллекции`,
  });

  const [activeTab, setActiveTab] = useState<TabValue>('all');

  return (
    <div className="flex flex-col flex-1 min-h-0">
      <div className="shrink-0 flex justify-center lg:justify-between items-center flex-wrap gap-4 mb-10">
        <Search />
        <Tabs tabs={TABS} active={activeTab} onChange={setActiveTab} />
      </div>
      <div className="flex-1 min-h-0 overflow-y-auto thin-scrollbar">
        <BooksList status={activeTab} />
      </div>
    </div>
  );
};
