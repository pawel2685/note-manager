import { useState } from 'react'
import { HeartIcon } from '@heroicons/react/24/outline';
import { parseTags } from '../utils/tagUtils';
import type { NewNote } from '../types/note';

type Props = {
  onCreate: (data: NewNote) => Promise<void>;
};

export default function AddNoteForm({ onCreate }: Props) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [tagsInput, setTagsInput] = useState('');
  const [isFavorite, setIsFavorite] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);

    if (!title.trim()) { setError('Tytuł jest wymagany.'); return; }
    if (!content.trim()) { setError('Treść jest wymagana.'); return; }

    const tags = parseTags(tagsInput);

    const payload: NewNote = {
      title: title.trim(),
      content: content.trim(),
      tags,
      isFavorite,
      // attachmentPath: zostawiamy na później
    };

    try {
      setSubmitting(true);
      await onCreate(payload);
      // reset formularza
      setTitle('');
      setContent('');
      setTagsInput('');
      setIsFavorite(false);
    } catch (err) {
      setError('Nie udało się zapisać notatki.');
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <h2 className="text-2xl font-semibold mb-6 text-slate-100 text-center">Nowa notatka</h2>

      {error && (
        <div className="mb-4 rounded-lg border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-400">
          {error}
        </div>
      )}

      <div className="mb-6 max-w-xl mx-auto">
        <label className="block text-sm font-medium mb-2 text-slate-300">Tytuł *</label>
        <input
          className="w-full h-12 rounded-xl border border-slate-600 bg-slate-700/50 px-4 text-lg text-slate-100 outline-none focus:ring-2 focus:ring-sky-500/50 shadow-inner shadow-slate-900/30"
          placeholder="Np. Lista zakupów"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
      </div>

      <div className="mb-6 max-w-xl mx-auto">
        <label className="block text-sm font-medium mb-2 text-slate-300">Treść *</label>
        <textarea
          className="w-full min-h-[180px] rounded-xl border border-slate-600 bg-slate-700/50 p-4 text-lg text-slate-100 outline-none focus:ring-2 focus:ring-sky-500/50 shadow-inner shadow-slate-900/30"
          placeholder="Wpisz treść notatki…"
          value={content}
          onChange={e => setContent(e.target.value)}
        />
      </div>

      <div className="mb-6 max-w-xl mx-auto">
        <label className="block text-sm font-medium mb-2 text-slate-300">Tagi (oddzielone przecinkiem lub spacją)</label>
        <input
          className="w-full h-12 rounded-xl border border-slate-600 bg-slate-700/50 px-4 text-lg text-slate-100 outline-none focus:ring-2 focus:ring-sky-500/50 shadow-inner shadow-slate-900/30"
          placeholder="np. praca, pomysł, ważne"
          value={tagsInput}
          onChange={e => setTagsInput(e.target.value)}
        />
        {/** podgląd chipów */}
        <div className="mt-3 flex flex-wrap gap-2">
          {parseTags(tagsInput).map(tag => (
            <span key={tag} className="rounded-full border border-slate-600 bg-slate-700/50 px-3 py-1 text-sm text-slate-300">
              #{tag}
            </span>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-between gap-4 max-w-xl mx-auto">
        <button
          type="button"
          onClick={() => setIsFavorite(!isFavorite)}
          className={`flex items-center gap-2 rounded-xl px-4 py-3 font-medium border transition-colors ${
            isFavorite 
              ? 'border-pink-500/50 text-pink-400 hover:bg-pink-500/10' 
              : 'border-slate-600 text-slate-400 hover:bg-slate-700/50'
          }`}
        >
          <HeartIcon className={`h-5 w-5 transition-colors ${isFavorite ? 'fill-pink-400' : ''}`} />
          {isFavorite ? 'Ulubiona' : 'Dodaj do ulubionych'}
        </button>

        <button
          type="submit"
          disabled={submitting}
          className="flex-1 rounded-xl bg-sky-500 px-6 py-3 font-medium text-white hover:bg-sky-600 transition-colors disabled:opacity-50"
        >
          {submitting ? (
            <div className="flex justify-center">
              <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-r-transparent"></div>
            </div>
          ) : (
            'Dodaj notatkę'
          )}
        </button>
      </div>
    </form>
  );
}
