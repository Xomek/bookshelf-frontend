import { createContext } from 'react';
import { HeaderState } from './types';

interface HeaderContextValue {
  header: HeaderState;
  setHeader: React.Dispatch<React.SetStateAction<HeaderState>>;
}

export const HeaderContext = createContext<HeaderContextValue | null>(null);
