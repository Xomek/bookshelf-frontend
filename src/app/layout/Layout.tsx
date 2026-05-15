import { Outlet } from 'react-router';
import { Header } from '../../components/Header';
import { HeaderProvider } from '@shared/providers/header/HeaderProvider';
import { ThemeProvider } from '@shared/providers/theme/ThemeProvider';
import { CardSettingsProvider } from '@shared/providers/card-settings/CardSettingsProvider';

export const Layout = () => {
  return (
    <ThemeProvider>
      <CardSettingsProvider>
        <HeaderProvider>
          <Header />

          <main className="flex flex-1 mx-auto w-full max-w-350 px-4">
            <Outlet />
          </main>
        </HeaderProvider>
      </CardSettingsProvider>
    </ThemeProvider>
  );
};
