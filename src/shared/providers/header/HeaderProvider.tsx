import { PropsWithChildren, useState } from 'react';
import { HeaderState } from './types';
import { HeaderContext } from './HeaderContext';

export const HeaderProvider = ({ children }: PropsWithChildren) => {
  const [header, setHeader] = useState<HeaderState>({
    title: '',
    subtitle: '',
  });

  return (
    <HeaderContext.Provider value={{ header, setHeader }}>
      {children}
    </HeaderContext.Provider>
  );
};
