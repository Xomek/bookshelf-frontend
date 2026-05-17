import { Book } from './Book';
import { useBooks } from '@shared/providers/books/useBooks';
import { useCardSettings } from '@shared/providers/card-settings/useCardSettings';
import { BookStatus } from '@shared/types/book-status.type';
import { cn } from '@shared/lib/utils';

interface BooksListProps {
  status: BookStatus | 'all';
}

export const BooksList = ({ status }: BooksListProps) => {
  const { books } = useBooks();
  const { cardSettings } = useCardSettings();

  const filtered =
    status === 'all' ? books : books.filter((b) => b.status === status);

  if (!filtered.length) {
    return (
      <div className="flex flex-1 items-center justify-center py-8">
        <span className="text-zinc-500 dark:text-zinc-400">
          Нет книг в этой категории
        </span>
      </div>
    );
  }

  return (
    <div
      className={cn(
        'grid justify-center pb-10',
        cardSettings.compactMode
          ? 'grid-cols-[repeat(auto-fill,250px)] gap-6'
          : 'grid-cols-[repeat(auto-fill,300px)] gap-10',
      )}
    >
      {filtered.map((book) => (
        <Book key={book.id} book={book} />
      ))}
    </div>
  );
};
