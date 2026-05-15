import { ROUTES } from '@shared/constants/routes';
import { useHeaderContext } from '@shared/providers/header/useHeaderContext';
import { Button } from '@shared/ui/Button';
import { Book, Plus, ArrowLeft, Settings } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router';

export const Header = () => {
  const { header } = useHeaderContext();

  const navigate = useNavigate();
  const location = useLocation();

  const isRootPage = location.pathname === ROUTES.ROOT;

  return (
    <header className="flex h-25 items-center border-b border-zinc-200 mb-8">
      <div className="mx-auto flex w-full max-w-350 items-center justify-between px-4">
        <div className="flex items-center gap-4">
          {isRootPage ? (
            <Book size={40} />
          ) : (
            <button
              onClick={() => navigate(-1)}
              className="p-2 rounded-lg transition-colors hover:bg-surface cursor-pointer"
            >
              <ArrowLeft className="w-6 h-6" />
            </button>
          )}

          <div className="relative flex items-center gap-3">
            <div>
              <h1 className="text-2xl">{header.title}</h1>
              <span className="text-sm text-zinc-500">{header.subtitle}</span>
            </div>

            {isRootPage && (
              <button
                onClick={() => navigate(ROUTES.SETTINGS)}
                className="absolute -right-12 -top-2 p-2 rounded-lg transition-colors hover:bg-surface cursor-pointer"
              >
                <Settings size={24} />
              </button>
            )}
          </div>
        </div>

        {isRootPage && (
          <Button
            variant="primary"
            onClick={() => navigate(ROUTES.ADD_NEW_BOOK)}
          >
            <Plus size={18} />
            Добавить книгу
          </Button>
        )}
      </div>
    </header>
  );
};
