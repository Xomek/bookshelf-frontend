import type { ButtonHTMLAttributes } from 'react';

import { cn } from '@shared/lib/utils';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({ className, ...props }: ButtonProps) => {
  return (
    <button
      className={cn(
        'flex items-center gap-2 cursor-pointer bg-primary text-white px-4 py-2 rounded-xl',
        className,
      )}
      {...props}
    />
  );
};
