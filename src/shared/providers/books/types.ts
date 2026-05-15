import { Book } from '@shared/types/book.type';
import { BookStatus } from '@shared/types/book-status.type';

export interface ExtendedBook extends Book {
  status: BookStatus;
  progress?: number;
  rating?: number;
}
