import { useState } from 'react';
import { Upload, FileText } from 'lucide-react';
import { Button } from '@shared/ui/Button';
import { Input } from '@shared/ui/Input';

interface BookFormData {
  title: string;
  author: string;
  description: string;
  genre: string;
  cover: string;
}

interface BookFormProps {
  initialData?: Partial<BookFormData>;
  submitLabel: string;
  onSubmit: (data: BookFormData) => void;
  onCancel: () => void;
  showPdf?: boolean;
}

export const BookForm = ({
  initialData = {},
  submitLabel,
  onSubmit,
  onCancel,
  showPdf = true,
}: BookFormProps) => {
  const [title, setTitle] = useState(initialData.title ?? '');
  const [author, setAuthor] = useState(initialData.author ?? '');
  const [description, setDescription] = useState(initialData.description ?? '');
  const [genre, setGenre] = useState(initialData.genre ?? '');
  const [cover, setCover] = useState(initialData.cover ?? '');
  const [pdfFile, setPdfFile] = useState<File | null>(null);

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.type === 'application/pdf') {
      setPdfFile(file);
    }
  };

  const handleSubmit = () => {
    onSubmit({ title, author, description, genre, cover });
  };

  return (
    <div className="flex-1">
      <div className="flex gap-8 mb-10">
        <div className="flex-1">
          <label className="block mb-6">
            <span className="block mb-2 font-semibold">Название книги</span>
            <Input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Война и мир"
            />
          </label>

          <label className="block mb-6">
            <span className="block mb-2 font-semibold">Автор</span>
            <Input
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              placeholder="Лев Толстой"
            />
          </label>

          <label className="block mb-6">
            <span className="block mb-2 font-semibold">Описание</span>
            <textarea
              className="h-30 w-full rounded-lg border border-border bg-surface p-3 transition-colors hover:border-primary focus:border-primary focus:outline-none"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Описание книги..."
            />
          </label>

          <label className="block mb-6">
            <span className="block mb-2 font-semibold">Жанр</span>
            <Input
              value={genre}
              onChange={(e) => setGenre(e.target.value)}
              placeholder="Роман, Исторический жанр"
            />
          </label>
        </div>

        <div className="w-56 flex-shrink-0 space-y-4">
          <div>
            <span className="block mb-2 font-semibold">Обложка</span>
            <div className="rounded-lg overflow-hidden border border-border bg-surface h-64 flex items-center justify-center">
              {cover ? (
                <img
                  src={cover}
                  alt={title}
                  className="w-full h-full object-cover"
                />
              ) : (
                <Upload size={40} className="text-text-secondary" />
              )}
            </div>
            <label className="block mt-3">
              <span className="block mb-2 text-sm font-medium">
                URL обложки
              </span>
              <Input
                value={cover}
                onChange={(e) => setCover(e.target.value)}
                placeholder="https://..."
              />
            </label>
          </div>

          {showPdf && (
            <div>
              <span className="block mb-2 font-semibold">PDF файл</span>
              {pdfFile ? (
                <div className="flex items-center gap-3 p-3 rounded-lg border border-border bg-surface">
                  <FileText size={20} className="text-red-500 flex-shrink-0" />
                  <div className="min-w-0">
                    <p className="text-sm font-medium truncate">
                      {pdfFile.name}
                    </p>
                    <p className="text-xs text-text-secondary">
                      {(pdfFile.size / 1024 / 1024).toFixed(1)} MB
                    </p>
                  </div>
                </div>
              ) : (
                <label className="block">
                  <div className="border-2 border-dashed border-border bg-surface rounded-lg flex flex-col items-center justify-center gap-2 py-6 cursor-pointer hover:bg-border transition-colors">
                    <Upload size={28} className="text-text-secondary" />
                    <span className="text-xs text-text-secondary text-center px-2">
                      Перетащите PDF или нажмите для выбора
                    </span>
                  </div>
                  <input
                    type="file"
                    accept=".pdf"
                    onChange={handleFileSelect}
                    className="hidden"
                  />
                </label>
              )}
            </div>
          )}
        </div>
      </div>

      <div className="flex items-center justify-end gap-2">
        <Button onClick={onCancel}>Отмена</Button>
        <Button variant="primary" onClick={handleSubmit}>
          {submitLabel}
        </Button>
      </div>
    </div>
  );
};
