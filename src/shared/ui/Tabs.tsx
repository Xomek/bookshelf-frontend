import { cn } from '@shared/lib/utils';

interface TabsProps<T extends string> {
  tabs: { value: T; label: string }[];
  active: T;
  onChange: (value: T) => void;
}

export const Tabs = <T extends string>({
  tabs,
  active,
  onChange,
}: TabsProps<T>) => {
  return (
    <div className="flex gap-1">
      {tabs.map((tab) => (
        <button
          key={tab.value}
          onClick={() => onChange(tab.value)}
          className={cn(
            'px-4 py-2 text-sm font-medium rounded-lg transition-colors',
            active === tab.value
              ? 'bg-primary text-white dark:text-zinc-900 hover:bg-primary/90'
              : 'bg-surface text-text-secondary hover:text-text hover:bg-border',
          )}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};
