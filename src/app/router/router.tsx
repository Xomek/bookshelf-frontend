import { createBrowserRouter } from 'react-router';
import { BooksPage } from '../../pages/BooksPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <BooksPage />,
  },
]);
