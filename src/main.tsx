import { createRoot } from 'react-dom/client';

import { Header } from './components/Header/Header';
import { Search } from '@shared/components/ui/Search';

import '@shared/styles/tailwind.css';

createRoot(document.getElementById('root')!).render(
  <div>
    <Header />
    <Search />
  </div>,
);
