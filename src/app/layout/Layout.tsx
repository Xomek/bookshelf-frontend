import { Outlet } from 'react-router';
import { Header } from '../../components/Header';
import { HeaderProvider } from '@shared/providers/header/HeaderProvider';

export const Layout = () => {
  return (
    <HeaderProvider>
      <Header />

      <main className="flex flex-1 mx-auto w-full max-w-350 px-4">
        <Outlet />
      </main>
    </HeaderProvider>
  );
};
