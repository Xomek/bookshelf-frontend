interface ProgressBarProps {
  progress: number;
}

export const ProgressBar = ({ progress }: ProgressBarProps) => {
  return (
    <div className="w-full bg-zinc-200 dark:bg-zinc-700 h-2 overflow-hidden">
      <div className="bg-primary h-full" style={{ width: `${progress}%` }} />
    </div>
  );
};
