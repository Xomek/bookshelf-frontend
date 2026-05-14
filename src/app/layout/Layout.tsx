import { Outlet } from 'react-router';
import { Header } from '../../components/Header';

export const Layout = () => {
  return (
    <div>
      <Header />

      <main className="flex flex-1 mx-auto w-full max-w-350 px-4">
        <Outlet />
      </main>
    </div>
  );
};
