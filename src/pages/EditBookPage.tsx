import { useMemo } from 'react';
import { useNavigate, useParams } from 'react-router';
import { useHeader } from '@shared/providers/header/useHeader';
import { useBooks } from '@shared/providers/books/useBooks';
import { BookForm } from '../components/BookForm';

export const EditBookPage = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const { getBook, updateBook } = useBooks();

  const book = getBook(id!);

  useHeader({
    title: 'Редактировать книгу',
    subtitle: book?.title ?? '',
  });

  const initialData = useMemo(
    () =>
      book
        ? {
            title: book.title,
            author: book.author,
            description: book.description,
            genre: book.genre,
            cover: book.cover,
          }
        : {},
    [book],
  );

  const handleSave = (data: {
    title: string;
    author: string;
    description: string;
    genre: string;
    cover: string;
  }) => {
    if (book) {
      updateBook(book.id, data);
    }
    navigate('/', { replace: true });
  };

  if (!book) return null;

  return (
    <BookForm
      initialData={initialData}
      submitLabel="Сохранить изменения"
      onSubmit={handleSave}
      onCancel={() => navigate(-1)}
      showPdf={false}
    />
  );
};
