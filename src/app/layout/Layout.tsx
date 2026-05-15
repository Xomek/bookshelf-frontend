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
          <div className="h-screen bg-background text-text flex flex-col">
            <Header />

            <main className="flex-1 mx-auto w-full max-w-350 px-4 flex flex-col min-h-0">
              <Outlet />
            </main>
          </div>
        </HeaderProvider>
      </CardSettingsProvider>
    </ThemeProvider>
  );
};
