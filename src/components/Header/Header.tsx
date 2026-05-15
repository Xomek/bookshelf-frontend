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
            <ArrowLeft
              className="cursor-pointer w-10"
              onClick={() => navigate(-1)}
            />
          )}

          <div className="relative">
            <h1 className="text-2xl">{header.title}</h1>
            <span className="text-sm text-zinc-500">{header.subtitle}</span>

            {isRootPage && (
              <Settings
                size={24}
                onClick={() => navigate(ROUTES.SETTINGS)}
                className="absolute -right-8 top-0 cursor-pointer"
              />
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
