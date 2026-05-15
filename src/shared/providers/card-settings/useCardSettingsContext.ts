import { useContext } from 'react';
import { CardSettingsContext } from './CardSettingsContext';

export const useCardSettingsContext = () => {
  const context = useContext(CardSettingsContext);

  if (!context) {
    throw new Error(
      'useCardSettingsContext must be used inside CardSettingsProvider',
    );
  }

  return context;
};
