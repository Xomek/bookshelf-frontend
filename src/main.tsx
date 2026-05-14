import { createRoot } from 'react-dom/client';

import { Header } from './components/Header/Header';

import '@shared/styles/tailwind.css';

createRoot(document.getElementById('root')!).render(<Header />);
