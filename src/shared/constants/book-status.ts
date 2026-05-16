import { BookStatus } from '@shared/types/book-status.type';

export const BOOK_STATUS_LABELS: Record<BookStatus, string> = {
  reading: 'Читаю',
  new: 'Новая',
  read: 'Прочитано',
};
