import { useHeader } from '@shared/providers/header/useHeader';

export const SettingsPage = () => {
  useHeader({
    title: 'Настройки',
    subtitle: 'Настройте внешний вид и отображение библиотеки',
  });

  return <div></div>;
};
