import { Button } from '@shared/components/ui/Button';

export const Header = () => {
  return (
    <header className="flex h-25 items-center border-b border-zinc-200 px-4">
      <div className="mx-auto flex w-full max-w-350 items-center justify-between">
        <div>
          <h1 className="mb-1 text-2xl">Моя библиотека</h1>

          <span className="text-sm text-zinc-500">6 книг в коллекции</span>
        </div>

        <Button>Добавить книгу</Button>
      </div>
    </header>
  );
};
