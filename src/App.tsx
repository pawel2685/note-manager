import { useEffect, useState } from 'react';
import { addNote, getAllNotes } from './db/notesService';
import type { Note } from './types/note';

function App() {
  const [notes, setNotes] = useState<Note[]>([]);

  useEffect(() => {
    (async () => {
      await addNote({
        title: 'Pierwsza notatka',
        content: 'To jest testowa notatka',
        tags: ['test', 'demo'],
        isFavorite: false,
      });
      const all = await getAllNotes();
      setNotes(all);
    })();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-2">Notatki:</h1>
      <ul className="space-y-2">
        {notes.map(note => (
          <li key={note.id} className="border rounded p-2">
            <h2 className="font-semibold">{note.title}</h2>
            <p>{note.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
