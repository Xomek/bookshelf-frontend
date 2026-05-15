import { createContext } from 'react';
import { CardSettings } from '@shared/types/card-settings.type';

interface CardSettingsContextValue {
  cardSettings: CardSettings;
  updateCardSetting: (key: keyof CardSettings, value: boolean) => void;
}

export const CardSettingsContext =
  createContext<CardSettingsContextValue | null>(null);
