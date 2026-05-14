import { ROUTES } from '@shared/constants/routes';
import { Button } from '@shared/ui/Button';
import { Book, Plus } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router';

export const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isRootPage = location.pathname === ROUTES.ROOT;

  return (
    <header className="flex h-25 items-center border-b border-zinc-200 mb-8">
      <div className="mx-auto flex w-full max-w-350 items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <Book size={40} />
          <div>
            <h1 className="text-2xl">Моя библиотека</h1>
            <span className="text-sm text-zinc-500">6 книг в коллекции</span>
          </div>
        </div>

        {isRootPage && (
          <Button onClick={() => navigate(ROUTES.ADD_NEW_BOOK)}>
            <Plus size={18} />
            Добавить книгу
          </Button>
        )}
      </div>
    </header>
  );
};
