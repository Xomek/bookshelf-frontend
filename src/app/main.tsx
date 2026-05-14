import { createRoot } from 'react-dom/client';

import { Header } from '../components/Header/Header';
import { Search } from '@shared/components/ui/Search';
import { BooksList } from '../components/BooksList';

import '@shared/styles/tailwind.css';

createRoot(document.getElementById('root')!).render(
  <div>
    <Header />
    <div className="mx-auto w-full max-w-350 items-center px-4">
      <Search />
      <BooksList />
    </div>
  </div>,
);
