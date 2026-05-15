import { useThemeContext } from './useThemeContext';

export const useTheme = () => {
  const { theme, toggleTheme } = useThemeContext();

  return { theme, toggleTheme };
};
