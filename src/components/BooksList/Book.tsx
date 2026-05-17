import { Star, MoreVertical, Pencil, Trash2 } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import { useBooks } from '@shared/providers/books/useBooks';
import { useCardSettings } from '@shared/providers/card-settings/useCardSettings';
import { ExtendedBook } from '@shared/providers/books/types';
import { BookStatus } from '@shared/types/book-status.type';
import { BOOK_STATUS_LABELS } from '@shared/constants/book-status';
import { ProgressBar } from '@shared/ui/ProgressBar';
import { Dropdown } from '@shared/ui/Dropdown';
import { Modal } from '@shared/ui/Modal';
import { cn } from '@shared/lib/utils';

const STATUS_BADGE: Record<BookStatus, string> = {
  reading: 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300',

  new: 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300',

  read: 'bg-zinc-100 text-zinc-700 dark:bg-zinc-700 dark:text-zinc-300',
};

interface BookProps {
  book: ExtendedBook;
}

export const Book = ({ book }: BookProps) => {
  const navigate = useNavigate();
  const { deleteBook } = useBooks();
  const { cardSettings } = useCardSettings();
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const badge = STATUS_BADGE[book.status];

  const handleDelete = () => {
    deleteBook(book.id);
    setShowDeleteModal(false);
  };

  return (
    <>
      <div
        onClick={() => navigate(`/book/${book.id}`)}
        className="group relative flex flex-col rounded-xl border border-zinc-200 dark:border-zinc-700 shadow-sm transition-all hover:shadow-lg hover:border-primary dark:hover:border-primary overflow-hidden cursor-pointer"
      >
        <div
          className="absolute top-2 right-2 z-10 opacity-0 group-hover:opacity-100 transition-opacity"
          onClick={(e) => e.stopPropagation()}
        >
          <Dropdown
            trigger={
              <button className="p-1.5 rounded-lg bg-background/80 backdrop-blur-sm hover:bg-background shadow-sm transition-colors">
                <MoreVertical size={16} />
              </button>
            }
            options={[
              {
                label: 'Редактировать',
                icon: <Pencil size={16} />,
                onClick: () => navigate(`/edit/${book.id}`),
              },
              {
                label: 'Удалить',
                icon: <Trash2 size={16} />,
                danger: true,
                onClick: () => setShowDeleteModal(true),
              },
            ]}
          />
        </div>

        {cardSettings.showCover && (
          <div className="relative">
            <img
              src={book.cover}
              alt={book.title}
              className={cn(
                'w-full object-cover',
                cardSettings.compactMode ? 'h-56' : 'h-80',
              )}
            />
            {cardSettings.showProgress &&
              book.status === 'reading' &&
              book.progress && (
                <div className="absolute bottom-0 left-0 right-0">
                  <ProgressBar progress={book.progress} />
                </div>
              )}
          </div>
        )}

        {!cardSettings.showCover &&
          cardSettings.showProgress &&
          book.status === 'reading' &&
          book.progress && (
            <div className="px-4 pb-2">
              <ProgressBar progress={book.progress} />
            </div>
          )}

        <div className={cn('p-4', cardSettings.compactMode && 'p-3')}>
          <h3
            className={cn(
              'font-semibold text-zinc-900 dark:text-zinc-100',
              cardSettings.compactMode ? 'text-sm' : 'text-lg',
            )}
          >
            {book.title}
          </h3>

          {cardSettings.showAuthor && (
            <p
              className={cn(
                'text-zinc-500 dark:text-zinc-400',
                cardSettings.compactMode ? 'text-xs mb-1' : 'text-sm mb-2',
              )}
            >
              {book.author}
            </p>
          )}

          {cardSettings.showGenre && book.genre && (
            <p
              className={cn(
                'text-zinc-500 dark:text-zinc-400',
                cardSettings.compactMode ? 'text-xs mb-1' : 'text-sm mb-2',
              )}
            >
              {book.genre}
            </p>
          )}

          {cardSettings.showPages && book.stats && (
            <p
              className={cn(
                'text-zinc-500 dark:text-zinc-400',
                cardSettings.compactMode ? 'text-xs mb-1' : 'text-sm mb-2',
              )}
            >
              {book.stats} стр.
            </p>
          )}

          {cardSettings.showStatus && (
            <span
              className={cn(
                'inline-block px-2 font-medium rounded mb-2',
                cardSettings.compactMode
                  ? 'text-[10px] py-0'
                  : 'text-xs py-0.5',
                badge,
              )}
            >
              {BOOK_STATUS_LABELS[book.status]}
            </span>
          )}

          {cardSettings.showDescription && book.description && (
            <p
              className={cn(
                'text-zinc-600 dark:text-zinc-300 line-clamp-2 mb-2',
                cardSettings.compactMode ? 'text-xs' : 'text-sm',
              )}
            >
              {book.description}
            </p>
          )}

          {cardSettings.showRating && book.rating && (
            <div
              className={cn(
                'flex items-center gap-1 text-yellow-500',
                cardSettings.compactMode ? 'mt-1' : 'mt-2',
              )}
            >
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  size={cardSettings.compactMode ? 14 : 16}
                  fill={star <= book.rating! ? 'currentColor' : 'none'}
                  className={
                    star > book.rating!
                      ? 'text-zinc-300 dark:text-zinc-600'
                      : ''
                  }
                />
              ))}
            </div>
          )}
        </div>
      </div>

      <Modal open={showDeleteModal} onClose={() => setShowDeleteModal(false)}>
        <div className="flex flex-col items-center text-center">
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-red-100 dark:bg-red-900/30">
            <Trash2 size={24} className="text-red-600 dark:text-red-400" />
          </div>

          <h3 className="text-lg font-semibold mb-1">Удалить книгу?</h3>
          <p className="text-sm text-text-secondary mb-1">
            <span className="font-medium text-text">«{book.title}»</span>
          </p>
          <p className="text-sm text-text-secondary mb-6">
            Это действие нельзя отменить.
          </p>

          <div className="flex w-full gap-3">
            <button
              onClick={() => setShowDeleteModal(false)}
              className="flex-1 rounded-lg border border-border bg-surface px-4 py-2.5 text-sm font-medium transition-colors hover:bg-border"
            >
              Отмена
            </button>
            <button
              onClick={handleDelete}
              className="flex-1 rounded-lg bg-red-600 px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-red-700"
            >
              Удалить
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
};
