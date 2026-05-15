import { useBooksStore } from './useBooksStore';

export const useBooks = () => {
  const books = useBooksStore((state) => state.books);
  const getBook = useBooksStore((state) => state.getBook);
  const updateBook = useBooksStore((state) => state.updateBook);
  const deleteBook = useBooksStore((state) => state.deleteBook);

  return { books, getBook, updateBook, deleteBook };
};
