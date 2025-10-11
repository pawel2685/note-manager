import AddNoteForm from './components/AddNoteForm';
import NotesList from './components/NotesList';
import { useNotes } from './hooks/useNotes';

function App() {
  const { notes, loading, create, remove, toggleFavorite, update } = useNotes();

  return (
    <div 
      style={{ 
        background: 'linear-gradient(to bottom right, rgb(229, 231, 235), rgb(156, 163, 175))',
        height: '100vh',
        width: '100vw',
        overflow: 'hidden',
        padding: '1rem',
        boxSizing: 'border-box',
        position: 'fixed',
        top: 0,
        left: 0
      }}
    >
      <div 
        style={{ 
          height: 'calc(100vh - 2rem)',
          width: '100%',
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        <h1 style={{ 
          color: '#2563eb',
          textAlign: 'center',
          fontSize: '2rem',
          fontWeight: 'bold',
          margin: '0 0 1rem 0',
          flexShrink: 0
        }}>
          📝 Moje Notatki
        </h1>

        <main 
          style={{ 
            display: 'flex',
            gap: '1rem',
            width: '100%',
            height: 'calc(100% - 4rem)',
            flexShrink: 0
          }}
        >
          <div 
            style={{ 
              width: 'calc(50% - 0.5rem)',
              height: '100%',
              padding: '1.25rem',
              borderRadius: '1rem',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 10px 10px -5px rgba(0, 0, 0, 0.1)',
              border: '3px solid rgb(107, 114, 128)',
              backgroundColor: 'white',
              boxSizing: 'border-box',
              overflow: 'hidden'
            }}
          >
            <AddNoteForm onCreate={create} />
          </div>

          <div 
            style={{ 
              width: 'calc(50% - 0.5rem)',
              height: '100%',
              padding: '1.25rem',
              borderRadius: '1rem',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 10px 10px -5px rgba(0, 0, 0, 0.1)',
              border: '3px solid rgb(107, 114, 128)',
              backgroundColor: 'white',
              boxSizing: 'border-box',
              overflow: 'hidden'
            }}
          >
            <NotesList
              notes={notes}
              loading={loading}
              onDelete={remove}
              onToggleFav={toggleFavorite}
              onUpdate={update}
            />
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
