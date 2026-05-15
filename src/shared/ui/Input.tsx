import { cn } from '@shared/lib/utils';
import * as React from 'react';

type InputProps = React.ComponentProps<'input'>;

export const Input = ({ className, type, ...props }: InputProps) => {
  return (
    <input
      type={type}
      className={cn(
        'h-10 w-full rounded-lg border border-border bg-surface px-3 transition-colors hover:border-primary focus:border-primary focus:outline-none',
        className,
      )}
      {...props}
    />
  );
};
