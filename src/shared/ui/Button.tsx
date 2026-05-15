import { cn } from '@shared/lib/utils';

type ButtonVariant = 'default' | 'primary';
interface ButtonProps extends React.ComponentProps<'button'> {
  variant?: ButtonVariant;
}

export const Button = ({
  className,
  variant = 'default',
  ...props
}: ButtonProps) => {
  return (
    <button
      className={cn(
        'flex items-center gap-2 cursor-pointer bg-surface text-text px-4 py-2 rounded-xl hover:bg-border transition-colors',
        className,
        {
          'bg-primary text-white dark:text-zinc-900 hover:bg-primary/90':
            variant === 'primary',
        },
      )}
      {...props}
    />
  );
};
