import { Input } from '@shared/components/ui/Input';
import { Search as SearchIcon } from 'lucide-react';

export const Search = () => {
  return (
    <div className="relative mx-auto flex w-full max-w-350 items-center px-4">
      <SearchIcon className="absolute top-1/2 left-7 -translate-y-1/2 text-zinc-400 size-4 cursor-pointer" />
      <Input className="w-100 pl-10" placeholder="Поиск книг" />
    </div>
  );
};
