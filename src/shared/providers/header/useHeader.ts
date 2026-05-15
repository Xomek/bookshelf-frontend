import { useEffect } from 'react';
import { useHeaderContext } from './useHeaderContext';

interface UseHeaderParams {
  title: string;
  subtitle: string;
}

export const useHeader = ({ title, subtitle }: UseHeaderParams) => {
  const { setHeader } = useHeaderContext();

  useEffect(() => {
    setHeader({
      title,
      subtitle,
    });
  }, [title, subtitle, setHeader]);
};
