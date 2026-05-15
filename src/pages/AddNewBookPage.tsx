import { useNavigate } from 'react-router';
import { useHeader } from '@shared/providers/header/useHeader';
import { BookForm } from '../components/BookForm';

export const AddNewBookPage = () => {
  const navigate = useNavigate();

  useHeader({
    title: 'Добавить книгу',
    subtitle: 'Создайте новую запись в вашей библиотеке',
  });

  const handleAdd = () => {
    navigate('/', { replace: true });
  };

  return (
    <BookForm
      submitLabel="Добавить в библиотеку"
      onSubmit={handleAdd}
      onCancel={() => navigate(-1)}
    />
  );
};
