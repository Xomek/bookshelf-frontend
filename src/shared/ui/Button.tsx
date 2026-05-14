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
        'flex items-center gap-2 cursor-pointer bg-gray-100 text-black px-4 py-2 rounded-xl',
        className,
        { 'bg-primary text-white': variant === 'primary' },
      )}
      {...props}
    />
  );
};
