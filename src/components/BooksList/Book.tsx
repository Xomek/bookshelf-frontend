import { Star } from 'lucide-react';

export const Book = () => {
  return (
    <div className="flex flex-col rounded-xl border border-zinc-200 shadow-sm transition hover:shadow-lg overflow-hidden cursor-pointer">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1eruEe2tcsh_FlOehhGiGcFclXKdzvKIgnw&s"
        alt="Война и мир"
        className="h-80 w-full object-cover"
      />

      <div className="p-4">
        <h3 className="text-lg font-semibold text-zinc-900">Война и мир</h3>

        <p className="text-sm mb-2 text-zinc-500">Лев Толстой</p>

        <div className="flex items-center gap-1 text-yellow-500">
          <Star size={16} fill="currentColor" />
          <Star size={16} fill="currentColor" />
          <Star size={16} fill="currentColor" />
          <Star size={16} fill="currentColor" />
          <Star size={16} className="text-zinc-300" />
        </div>
      </div>
    </div>
  );
};
