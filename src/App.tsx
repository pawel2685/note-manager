import AddNoteForm from './components/AddNoteForm';
import NotesList from './components/NotesList';
import Header from './components/Header';
import { useNotes } from './hooks/useNotes';

function App() {
  const { notes, loading, create, remove, toggleFavorite } = useNotes();

  return (
    <div className="min-h-screen bg-slate-900 p-6">
      <div className="mx-auto max-w-[95%] h-[calc(100vh-3rem)]">
        <h1 className="text-3xl font-bold text-slate-100 mb-6 text-center">
          📝 Note Manager
        </h1>

        <main className="flex gap-6 h-full">
          <div className="w-1/2 border border-slate-700 rounded-xl bg-slate-800/80 p-4 shadow-lg shadow-slate-900/50 backdrop-blur">
            <AddNoteForm onCreate={create} />
          </div>

          <div className="w-1/2 border border-slate-700 rounded-xl bg-slate-800/80 p-4 shadow-lg shadow-slate-900/50 backdrop-blur">
            <NotesList
              notes={notes}
              loading={loading}
              onDelete={remove}
              onToggleFav={toggleFavorite}
            />
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
