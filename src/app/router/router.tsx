import { createBrowserRouter } from 'react-router';
import { BooksPage, AddNewBookPage } from '../../pages';
import { ROUTES } from '@shared/constants/routes';
import { Layout } from '../layout';

export const router = createBrowserRouter([
  {
    path: ROUTES.ROOT,
    element: <Layout />,
    children: [
      {
        index: true,
        element: <BooksPage />,
      },
      {
        path: ROUTES.ADD_NEW_BOOK,
        element: <AddNewBookPage />,
      },
    ],
  },
]);
