import { useState } from 'react';
import { cn } from '@shared/lib/utils';
import { useClickOutside } from '@shared/hooks/useClickOutside';

interface DropdownOption {
  label: string;
  onClick: () => void;
  icon?: React.ReactNode;
  danger?: boolean;
}

interface DropdownProps {
  options: DropdownOption[];
  trigger: React.ReactNode;
}

export const Dropdown = ({ options, trigger }: DropdownProps) => {
  const [open, setOpen] = useState(false);

  const ref = useClickOutside(() => setOpen(false));

  return (
    <div ref={ref} className="relative">
      <div
        onClick={(e) => {
          e.stopPropagation();
          setOpen((v) => !v);
        }}
      >
        {trigger}
      </div>

      {open && (
        <div className="absolute right-0 top-full z-50 mt-1 w-48 rounded-lg border border-border bg-background shadow-lg">
          {options.map((option, i) => (
            <button
              key={i}
              onClick={() => {
                option.onClick();
                setOpen(false);
              }}
              className={cn(
                'flex w-full items-center gap-2 px-4 py-2.5 text-sm transition-colors first:rounded-t-lg last:rounded-b-lg hover:bg-surface',
                option.danger
                  ? 'text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20'
                  : 'text-text',
              )}
            >
              {option.icon}
              {option.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
