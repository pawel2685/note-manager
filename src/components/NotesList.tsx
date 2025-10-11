import type { Note } from '../types/note';
import { StarIcon as StarSolid } from '@heroicons/react/24/solid';
import { StarIcon as StarOutline } from '@heroicons/react/24/outline';
import { TrashIcon } from '@heroicons/react/24/outline';

type Props = {
  notes: Note[];
  loading?: boolean;
  onDelete?: (id: string) => Promise<void>;
  onToggleFav?: (id: string, fav: boolean) => Promise<void>;
};

function formatDate(ms: number) {
  return new Date(ms).toLocaleString();
}

export default function NotesList({ notes, loading, onDelete, onToggleFav }: Props) {
  if (loading) {
    return <div className="mt-6 text-center text-slate-600">Ładowanie…</div>;
  }

  if (!notes.length) {
    return (
      <div className="mt-6 text-center text-slate-600">
        Brak notatek. Dodaj pierwszą powyżej.
      </div>
    );
  }

    return (
      <div className="mt-6">
        <div className="max-h-[70vh] overflow-auto pr-2">
          <ul className="grid gap-4 sm:grid-cols-2">
      {notes.map(n => (
        <li key={n.id} className="rounded-2xl border border-slate-200 bg-white/70 backdrop-blur p-4 shadow">
          <div className="mb-1 flex items-start justify-between gap-3">
            <div className="flex-1">
              <h3 className="font-semibold leading-tight">{n.title}</h3>
              <p className="text-sm text-slate-700 whitespace-pre-wrap mt-1">{n.content}</p>
            </div>

            <div className="flex flex-col items-end gap-2">
              <button
                title={n.isFavorite ? 'Usuń z ulubionych' : 'Oznacz jako ulubione'}
                className="rounded-lg p-2 bg-amber-100 text-amber-800 flex items-center"
                onClick={() => onToggleFav && onToggleFav(n.id, !n.isFavorite)}
              >
                {n.isFavorite ? <StarSolid className="h-4 w-4" /> : <StarOutline className="h-4 w-4" />}
              </button>
              <button
                title="Usuń"
                className="rounded-lg p-2 bg-red-50 text-red-600 flex items-center"
                onClick={() => onDelete && onDelete(n.id)}
              >
                <TrashIcon className="h-4 w-4" />
              </button>
            </div>
          </div>

          <div className="mt-3 flex flex-wrap gap-2">
            {n.tags.map(t => (
              <span key={t} className="rounded-full border px-2 py-0.5 text-xs text-slate-700">#{t}</span>
            ))}
          </div>

          <div className="mt-3 text-xs text-slate-500">
            <div>Utworzono: {formatDate(n.createdAt)}</div>
            <div>Aktualizacja: {formatDate(n.updatedAt)}</div>
          </div>
        </li>
      ))}
          </ul>
        </div>
      </div>
    );
}
