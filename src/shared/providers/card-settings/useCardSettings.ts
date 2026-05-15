import { useCardSettingsContext } from './useCardSettingsContext';

export const useCardSettings = () => {
  const { cardSettings, updateCardSetting } = useCardSettingsContext();

  return { cardSettings, updateCardSetting };
};
