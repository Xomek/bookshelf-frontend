import { cn } from '@shared/lib/utils';

interface ToggleProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label: string;
}

export const Toggle = ({ checked, onChange, label }: ToggleProps) => {
  return (
    <label className="flex items-center justify-between cursor-pointer">
      <span className="text-sm">{label}</span>
      <button
        onClick={() => onChange(!checked)}
        className={cn(
          `relative h-6 w-11 rounded-full transition-colors bg-zinc-300 dark:bg-zinc-600`,
          {
            'bg-primary': checked,
          },
        )}
      >
        <span
          className={cn(
            `absolute top-0.5 left-0.5 h-5 w-5 rounded-full bg-white shadow-sm transition-transform translate-x-0`,
            { 'translate-x-5': checked },
          )}
        />
      </button>
    </label>
  );
};
