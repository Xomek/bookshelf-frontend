import { useHeader } from '@shared/providers/header/useHeader';

export const ReaderPage = () => {
  useHeader({
    title: 'Война и мир',
    subtitle: 'Лев Толстой',
  });

  return (
    <div className="py-4 space-y-4 w-full">
      <div className="w-full rounded-lg border border-border bg-surface min-h-100 flex items-center justify-center">
        <div className="text-center space-y-4">
          <p className="text-lg font-medium">Контент книги</p>
          <p className="text-sm text-text-secondary">
            Здесь будет отображаться содержимое книги
          </p>
          <p className="text-xs text-text-secondary">
            В будущем здесь будет рендериться распарсенный PDF с бекенда
          </p>
        </div>
      </div>
    </div>
  );
};
