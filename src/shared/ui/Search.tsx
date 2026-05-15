import { Input } from './Input';
import { Search as SearchIcon } from 'lucide-react';

export const Search = () => {
  return (
    <div className="relative">
      <SearchIcon className="absolute top-1/2 left-3 -translate-y-1/2 text-text-secondary size-4 cursor-pointer" />
      <Input className="w-100 pl-10" placeholder="Поиск книг" />
    </div>
  );
};
