import { cn } from '@shared/lib/utils';
import { useClickOutside } from '@shared/hooks/useClickOutside';

interface ModalProps {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export const Modal = ({ open, onClose, children }: ModalProps) => {
  const ref = useClickOutside(onClose);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
      onClick={onClose}
    >
      <div
        ref={ref}
        className={cn(
          'w-full max-w-md rounded-xl border border-border bg-background p-6 shadow-xl',
          'animate-in fade-in zoom-in-95 duration-200',
        )}
      >
        {children}
      </div>
    </div>
  );
};
