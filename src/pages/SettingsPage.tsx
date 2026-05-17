import { Sun, Moon, Star } from 'lucide-react';
import { useHeader } from '@shared/providers/header/useHeader';
import { useTheme } from '@shared/providers/theme/useTheme';
import { useCardSettings } from '@shared/providers/card-settings/useCardSettings';
import { Toggle } from '@shared/ui/Toggle';
import { CardSettings } from '@shared/types/card-settings.type';
import { ProgressBar } from '@shared/ui/ProgressBar';
import { cn } from '@shared/lib/utils';

const CARD_SETTINGS_LABELS: Record<keyof CardSettings, string> = {
  showCover: 'Обложка',
  showAuthor: 'Автор',
  showGenre: 'Жанр',
  showPages: 'Количество страниц',
  showStatus: 'Статус',
  showDescription: 'Описание',
  showRating: 'Рейтинг',
  showProgress: 'Прогресс чтения',
  compactMode: 'Компактный режим',
};

const CARD_SETTINGS_DESCRIPTIONS: Record<keyof CardSettings, string> = {
  showCover:
    'Показывать обложку книги на карточке. Отключение скрывает изображение обложки.',
  showAuthor: 'Показывать имя автора. Отключение скроет информацию об авторе.',
  showGenre: 'Показывать жанр книги.',
  showPages: 'Показывать количество страниц книги.',
  showStatus: 'Показывать статус чтения книги (читаю, новая, прочитано).',
  showDescription: 'Показывать описание книги.',
  showRating:
    'Показывать рейтинг книги. Отключение скроет звёзды или числовой рейтинг.',
  showProgress:
    'Показывать прогресс чтения. Отключение скроет индикатор прочитанных страниц.',
  compactMode: 'Уменьшает размер карточек для более плотного отображения.',
};

const PREVIEW_BOOK = {
  title: 'Война и мир',
  author: 'Лев Толстой',
  cover:
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1eruEe2tcsh_FlOehhGiGcFclXKdzvKIgnw&s',
  description: 'Масштабный роман-эпопея Льва Толстого',
  genre: 'Роман, Исторический жанр',
  stats: 1225,
  progress: 65,
  rating: 4,
};

const CardPreview = ({ cardSettings }: { cardSettings: CardSettings }) => {
  const c = cardSettings.compactMode;
  return (
    <div className="sticky top-4">
      <p className="font-medium mb-3">Предпросмотр</p>
      <div className="relative flex flex-col rounded-xl border border-zinc-200 dark:border-zinc-700 shadow-sm overflow-hidden w-72">
        {cardSettings.showCover && (
          <div className="relative">
            <img
              src={PREVIEW_BOOK.cover}
              alt={PREVIEW_BOOK.title}
              className={cn('w-full object-cover', c ? 'h-56' : 'h-80')}
            />
            {cardSettings.showProgress && (
              <div className="absolute bottom-0 left-0 right-0">
                <ProgressBar progress={PREVIEW_BOOK.progress} />
              </div>
            )}
          </div>
        )}

        <div className={cn('p-4', c && 'p-3')}>
          <h3
            className={cn(
              'font-semibold text-zinc-900 dark:text-zinc-100',
              c ? 'text-sm' : 'text-lg',
            )}
          >
            {PREVIEW_BOOK.title}
          </h3>

          {cardSettings.showAuthor && (
            <p
              className={cn(
                'text-zinc-500 dark:text-zinc-400',
                c ? 'text-xs mb-1' : 'text-sm mb-2',
              )}
            >
              {PREVIEW_BOOK.author}
            </p>
          )}

          {cardSettings.showGenre && PREVIEW_BOOK.genre && (
            <p
              className={cn(
                'text-zinc-500 dark:text-zinc-400',
                c ? 'text-xs mb-1' : 'text-sm mb-2',
              )}
            >
              {PREVIEW_BOOK.genre}
            </p>
          )}

          {cardSettings.showPages && PREVIEW_BOOK.stats && (
            <p
              className={cn(
                'text-zinc-500 dark:text-zinc-400',
                c ? 'text-xs mb-1' : 'text-sm mb-2',
              )}
            >
              {PREVIEW_BOOK.stats} стр.
            </p>
          )}

          {cardSettings.showStatus && (
            <span
              className={cn(
                'inline-block px-2 font-medium rounded mb-2',
                c ? 'text-[10px] py-0' : 'text-xs py-0.5',
                'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300',
              )}
            >
              Читаю
            </span>
          )}

          {cardSettings.showDescription && PREVIEW_BOOK.description && (
            <p
              className={cn(
                'text-zinc-600 dark:text-zinc-300 line-clamp-2 mb-2',
                c ? 'text-xs' : 'text-sm',
              )}
            >
              {PREVIEW_BOOK.description}
            </p>
          )}

          {cardSettings.showRating && PREVIEW_BOOK.rating && (
            <div
              className={cn(
                'flex items-center gap-1 text-yellow-500',
                c ? 'mt-1' : 'mt-2',
              )}
            >
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  size={c ? 14 : 16}
                  fill={star <= PREVIEW_BOOK.rating ? 'currentColor' : 'none'}
                  className={
                    star > PREVIEW_BOOK.rating
                      ? 'text-zinc-300 dark:text-zinc-600'
                      : ''
                  }
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export const SettingsPage = () => {
  useHeader({
    title: 'Настройки',
    subtitle: 'Настройте внешний вид и отображение библиотеки',
  });

  const { theme, toggleTheme } = useTheme();
  const { cardSettings, updateCardSetting } = useCardSettings();

  return (
    <div className="py-4 w-full flex flex-col flex-1 min-h-0">
      <div className="flex items-center justify-between w-full rounded-lg border border-border bg-surface p-4 mb-4 shrink-0">
        <div>
          <p className="font-medium">Тема оформления</p>
          <p className="text-sm text-text-secondary">
            {theme === 'light' ? 'Светлая тема' : 'Тёмная тема'}
          </p>
          <p className="text-xs text-text-secondary mt-1">
            Переключает светлую и тёмную цветовую схему интерфейса
          </p>
        </div>

        <button
          onClick={toggleTheme}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-background hover:bg-surface transition-colors"
          aria-label="Переключить тему"
        >
          {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
        </button>
      </div>

      <div className="flex-1 min-h-0 overflow-y-auto thin-scrollbar">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex-1 space-y-4">
            <div className="rounded-lg border border-border bg-surface p-4 space-y-4">
              <p className="font-medium">Элементы карточки</p>

              {(Object.keys(cardSettings) as Array<keyof CardSettings>)
                .filter((key) => key !== 'compactMode')
                .map((key) => (
                  <div key={key} className="space-y-1">
                    <Toggle
                      label={CARD_SETTINGS_LABELS[key]}
                      checked={cardSettings[key]}
                      onChange={(value) => updateCardSetting(key, value)}
                    />
                    <p className="text-xs text-text-secondary ml-1">
                      {CARD_SETTINGS_DESCRIPTIONS[key]}
                    </p>
                  </div>
                ))}
            </div>

            <div className="rounded-lg border border-border bg-surface p-4">
              <p className="font-medium mb-3">Режим отображения</p>
              <div className="space-y-1">
                <Toggle
                  label={CARD_SETTINGS_LABELS.compactMode}
                  checked={cardSettings.compactMode}
                  onChange={(value) => updateCardSetting('compactMode', value)}
                />
                <p className="text-xs text-text-secondary ml-1">
                  {CARD_SETTINGS_DESCRIPTIONS.compactMode}
                </p>
              </div>
            </div>
          </div>

          <div className="lg:w-72 flex-shrink-0">
            <CardPreview cardSettings={cardSettings} />
          </div>
        </div>
      </div>
    </div>
  );
};
