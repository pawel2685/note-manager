import { useCallback, useEffect, useState } from 'react';
import type { Note, NewNote } from '../types/note';
import { addNote, getAllNotes, updateNote, deleteNote } from '../db/notesService';

export function useNotes() {
  const [notes, setNotes] = useState<Note[]>([]);
  const [loading, setLoading] = useState(true);

  const reload = useCallback(async () => {
    setLoading(true);
    try {
      const all = await getAllNotes();
      setNotes(all);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    void reload();
  }, [reload]);

  const create = useCallback(async (data: NewNote) => {
    await addNote(data);
    await reload();
  }, [reload]);

  const remove = useCallback(async (id: string) => {
    await deleteNote(id);
    await reload();
  }, [reload]);

  const toggleFavorite = useCallback(async (id: string, fav: boolean) => {
    await updateNote(id, { isFavorite: fav });
    await reload();
  }, [reload]);

  return { notes, loading, create, remove, toggleFavorite } as const;
}
