import AddNoteForm from './components/AddNoteForm';
import NotesList from './components/NotesList';
import { useNotes } from './hooks/useNotes';

function App() {
  const { notes, loading, create, remove, toggleFavorite } = useNotes();

  return (
    <div 
      className="h-screen"
      style={{ 
        background: 'linear-gradient(to bottom right, rgb(229, 231, 235), rgb(156, 163, 175))',
        minHeight: '100vh',
        overflow: 'hidden',
        padding: '1rem',
        boxSizing: 'border-box'
      }}
    >
      <div 
        className="h-full flex flex-col" 
        style={{ 
          maxWidth: '100%', 
          width: '100%',
          margin: '0 auto'
        }}
      >
        <h1 className="text-3xl font-bold mb-4 text-center py-2" style={{ color: '#2563eb' }}>
          📝 Moje Notatki
        </h1>

        <main 
          className="flex flex-1 min-h-0" 
          style={{ 
            gap: '1rem',
            width: '100%',
            maxWidth: '100%'
          }}
        >
          <div 
            className="bg-white"
            style={{ 
              width: 'calc(50% - 0.5rem)',
              padding: '1.25rem',
              borderRadius: '1rem',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 10px 10px -5px rgba(0, 0, 0, 0.1)',
              border: '3px solid rgb(107, 114, 128)',
              overflow: 'hidden',
              boxSizing: 'border-box'
            }}
          >
            <AddNoteForm onCreate={create} />
          </div>

          <div 
            className="bg-white"
            style={{ 
              width: 'calc(50% - 0.5rem)',
              padding: '1.25rem',
              borderRadius: '1rem',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 10px 10px -5px rgba(0, 0, 0, 0.1)',
              border: '3px solid rgb(107, 114, 128)',
              overflow: 'hidden',
              boxSizing: 'border-box'
            }}
          >
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
