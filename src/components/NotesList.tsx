import type { Note } from '../types/note';
import { HeartIcon as HeartSolid } from '@heroicons/react/24/solid';
import { HeartIcon as HeartOutline } from '@heroicons/react/24/outline';
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
    return (
      <div className="h-100 d-flex align-items-center justify-content-center">
        <div className="text-center">
          <div className="spinner-border text-primary mb-3" role="status">
            <span className="visually-hidden">Ładowanie...</span>
          </div>
          <p className="text-muted fs-5">Ładowanie notatek...</p>
        </div>
      </div>
    );
  }

  if (!notes.length) {
    return (
      <div className="h-100 d-flex align-items-center justify-content-center">
        <div className="text-center">
          <div className="fs-1 text-muted mb-3">📝</div>
          <h4 className="text-muted mb-2">Brak notatek</h4>
          <p className="text-muted">Dodaj pierwszą notatkę używając formularza obok</p>
        </div>
      </div>
    );
  }

  return (
    <div className="h-100">
      <div className="h-100 bg-transparent">
        <h2 className="h4 text-primary fw-bold text-center mb-3">
          📚 Twoje notatki
        </h2>
        
        <div className="overflow-auto" style={{ height: 'calc(100% - 60px)' }}>
          <div className="row g-3" style={{ margin: 0, width: '100%' }}>
            {notes.map(n => (
              <div key={n.id} className="col-12" style={{ paddingLeft: '0.75rem', paddingRight: '0.75rem' }}>
                <div 
                  className="card h-auto bg-white" 
                  style={{ 
                    borderRadius: '1rem', 
                    border: '2px solid #6b7280', 
                    boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.1)' 
                  }}
                >
                  <div className="card-body p-4">
                    <div className="d-flex justify-content-between align-items-start mb-3">
                      <div className="flex-grow-1 me-3">
                        <h5 className="card-title text-primary fw-bold mb-2 lh-sm">
                          {n.title}
                        </h5>
                        <p className="card-text text-dark lh-base" style={{ 
                          fontSize: '1rem',
                          whiteSpace: 'pre-wrap',
                          wordBreak: 'break-word'
                        }}>
                          {n.content}
                        </p>
                      </div>
                      
                      <div className="d-flex flex-column gap-2">
                        <button
                          type="button"
                          title={n.isFavorite ? "Usuń z ulubionych" : "Dodaj do ulubionych"}
                          className={`btn btn-sm rounded-3 shadow-sm ${
                            n.isFavorite 
                              ? 'btn-danger' 
                              : 'btn-outline-danger'
                          }`}
                          onClick={() => onToggleFav && onToggleFav(n.id, !n.isFavorite)}
                        >
                          {n.isFavorite ? 
                            <HeartSolid style={{ width: '16px', height: '16px' }} /> : 
                            <HeartOutline style={{ width: '16px', height: '16px' }} />
                          }
                        </button>
                        
                        <button
                          type="button"
                          title="Usuń notatkę"
                          className="btn btn-sm btn-outline-danger rounded-3 shadow-sm"
                          onClick={() => onDelete && onDelete(n.id)}
                        >
                          <TrashIcon style={{ width: '16px', height: '16px' }} />
                        </button>
                      </div>
                    </div>

                    {n.tags.length > 0 && (
                      <div className="d-flex flex-wrap gap-1 mb-3">
                        {n.tags.map(t => (
                          <span 
                            key={t} 
                            className="badge bg-secondary rounded-pill px-2 py-1"
                            style={{ fontSize: '0.8rem' }}
                          >
                            #{t}
                          </span>
                        ))}
                      </div>
                    )}

                    <div className="border-top pt-2 mt-3">
                      <div className="row">
                        <div className="col-6">
                          <small className="text-muted d-block">
                            <i className="bi bi-plus-circle me-1"></i>
                            Utworzono: {formatDate(n.createdAt)}
                          </small>
                        </div>
                        <div className="col-6">
                          <small className="text-muted d-block">
                            <i className="bi bi-pencil me-1"></i>
                            Zmieniono: {formatDate(n.updatedAt)}
                          </small>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
