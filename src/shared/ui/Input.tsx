import { cn } from '@shared/lib/utils';
import * as React from 'react';

type InputProps = React.ComponentProps<'input'>;

export const Input = ({ className, type, ...props }: InputProps) => {
  return (
    <input
      type={type}
      className={cn(
        'h-10 w-full rounded-lg border border-gray-200 px-3 bg-zinc-50 transition-colors hover:border-gray-300 focus:border-primary focus:outline-none',
        className,
      )}
      {...props}
    />
  );
};
