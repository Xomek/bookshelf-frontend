import { create } from 'zustand';
import { ExtendedBook } from '@shared/providers/books/types';

const MOCK_BOOKS: ExtendedBook[] = [
  {
    id: '1',
    title: 'Война и мир',
    author: 'Лев Толстой',
    cover:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1eruEe2tcsh_FlOehhGiGcFclXKdzvKIgnw&s',
    description: 'Масштабный роман-эпопея Льва Толстого',
    genre: 'Роман, Исторический жанр',
    status: 'reading',
    progress: 65,
    rating: 4,
  },
  {
    id: '2',
    title: 'Преступление и наказание',
    author: 'Фёдор Достоевский',
    cover:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1eruEe2tcsh_FlOehhGiGcFclXKdzvKIgnw&s',
    description: 'Психологический роман',
    genre: 'Роман, Психология',
    status: 'new',
    rating: 5,
  },
  {
    id: '3',
    title: 'Анна Каренина',
    author: 'Лев Толстой',
    cover:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1eruEe2tcsh_FlOehhGiGcFclXKdzvKIgnw&s',
    description: 'Роман о любви и семье',
    genre: 'Роман',
    status: 'read',
    rating: 5,
  },
  {
    id: '4',
    title: 'Мастер и Маргарита',
    author: 'Михаил Булгаков',
    cover:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1eruEe2tcsh_FlOehhGiGcFclXKdzvKIgnw&s',
    description: 'Мистический роман',
    genre: 'Роман, Мистика',
    status: 'reading',
    progress: 30,
    rating: 4,
  },
  {
    id: '5',
    title: 'Идиот',
    author: 'Фёдор Достоевский',
    cover:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1eruEe2tcsh_FlOehhGiGcFclXKdzvKIgnw&s',
    description: 'Философский роман',
    genre: 'Роман, Философия',
    status: 'read',
    rating: 4,
  },
];

interface BooksStore {
  books: ExtendedBook[];
  getBook: (id: string) => ExtendedBook | undefined;
  updateBook: (id: string, data: Partial<ExtendedBook>) => void;
  deleteBook: (id: string) => void;
}

export const useBooksStore = create<BooksStore>((set, get) => ({
  books: MOCK_BOOKS,

  getBook: (id) => get().books.find((b) => b.id === id),

  updateBook: (id, data) =>
    set((state) => ({
      books: state.books.map((b) => (b.id === id ? { ...b, ...data } : b)),
    })),

  deleteBook: (id) =>
    set((state) => ({
      books: state.books.filter((b) => b.id !== id),
    })),
}));
