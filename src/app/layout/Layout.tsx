import { Outlet } from 'react-router';
import { Header } from '../../components/Header';

export const Layout = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex flex-1">
        <Outlet />
      </main>
    </div>
  );
};
