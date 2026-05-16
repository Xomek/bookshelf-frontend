import { PropsWithChildren, useCallback } from 'react';
import { DEFAULT_CARD_SETTINGS } from '@shared/constants/card-settings';
import { useLocalStorage } from '@shared/hooks/useLocalStorage';
import { CardSettingsContext } from './CardSettingsContext';

const STORAGE_KEY = 'card-settings';

export const CardSettingsProvider = ({ children }: PropsWithChildren) => {
  const [cardSettings, setCardSettings] = useLocalStorage(
    STORAGE_KEY,
    DEFAULT_CARD_SETTINGS,
  );

  const updateCardSetting = useCallback(
    (key: keyof typeof cardSettings, value: boolean) => {
      setCardSettings((prev) => ({ ...prev, [key]: value }));
    },
    [setCardSettings],
  );

  return (
    <CardSettingsContext.Provider value={{ cardSettings, updateCardSetting }}>
      {children}
    </CardSettingsContext.Provider>
  );
};
