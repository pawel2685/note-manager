import { useState } from 'react';
import { HeartIcon } from '@heroicons/react/24/outline';
import { HeartIcon as HeartSolid } from '@heroicons/react/24/solid';
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
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Ograniczenie rozmiaru do 5MB
      if (file.size > 5 * 1024 * 1024) {
        setError('Plik jest za duży. Maksymalny rozmiar to 5MB.');
        return;
      }
      setSelectedFile(file);
      setError(null);
    }
  };

  const convertFileToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  };

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);

    if (!title.trim()) {
      setError('Tytuł jest wymagany.');
      return;
    }
    if (!content.trim()) {
      setError('Treść jest wymagana.');
      return;
    }

    const tags = parseTags(tagsInput);
    
    let attachmentPath: string | undefined;
    if (selectedFile) {
      try {
        attachmentPath = await convertFileToBase64(selectedFile);
      } catch (err) {
        setError('Nie udało się przetworzyć załącznika.');
        setSubmitting(false);
        return;
      }
    }
    
    const payload: NewNote = {
      title: title.trim(),
      content: content.trim(),
      tags,
      isFavorite,
      attachmentPath,
    };

    try {
      setSubmitting(true);
      await onCreate(payload);
      
      // Resetuj tylko gdy nie edytujemy (onCancelEdit będzie wywoływać App.tsx po zapisaniu)
      setTitle('');
      setContent('');
      setTagsInput('');
      setIsFavorite(false);
      setSelectedFile(null);
    } catch (err) {
      setError('Nie udało się zapisać notatki.');
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="h-100">
      <div className="h-100 bg-transparent">
        <div className="d-flex flex-column h-100">
          <h2 className="text-center mb-3 h4 text-primary fw-bold">
            ✨ Nowa notatka
          </h2>

          {error && (
            <div className="alert alert-danger alert-dismissible rounded-3 shadow-sm mb-3 py-2" role="alert">
              <i className="bi bi-exclamation-triangle-fill me-2"></i>
              <strong>Błąd:</strong> {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="flex-grow-1 d-flex flex-column" style={{ minHeight: 0, height: '100%' }}>
            <div className="flex-grow-1 overflow-auto pe-2" style={{ 
              maxHeight: '100%',
              overflowY: 'auto',
              scrollbarWidth: 'thin',
              flex: '1 1 0'
            }}>
              <div className="mb-3">
                <label htmlFor="title" className="form-label fs-5 fw-bold text-primary mb-2">
                  📝 Tytuł *
                </label>
                <input
                  type="text"
                  className="form-control form-control-lg rounded-3 shadow-sm border-2 border-primary"
                  id="title"
                  placeholder="Np. Lista zakupów..."
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  style={{
                    fontSize: '1.2rem',
                    padding: '14px 18px'
                  }}
                />
              </div>

              <div className="mb-3 flex-grow-1 d-flex flex-column">
                <label htmlFor="content" className="form-label fs-5 fw-bold text-primary mb-2">
                  📄 Treść *
                </label>
                <textarea
                  className="form-control form-control-lg rounded-3 shadow-sm border-2 border-primary flex-grow-1"
                  id="content"
                  placeholder="Wpisz treść notatki..."
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  rows={4}
                  style={{
                    fontSize: '1.1rem',
                    padding: '14px 18px',
                    resize: 'vertical',
                    minHeight: '120px',
                    maxHeight: '200px'
                  }}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="tags" className="form-label fs-5 fw-bold text-secondary mb-2">
                  🏷️ Tagi
                  <small className="text-muted ms-2">(przecinek)</small>
                </label>
                <input
                  type="text"
                  className="form-control form-control-lg rounded-3 shadow-sm border-2 border-secondary"
                  id="tags"
                  placeholder="praca, pomysł, ważne"
                  value={tagsInput}
                  onChange={(e) => setTagsInput(e.target.value)}
                  style={{
                    fontSize: '1.1rem',
                    padding: '12px 16px'
                  }}
                />
                {parseTags(tagsInput).length > 0 && (
                  <div className="mt-2 d-flex flex-wrap gap-1">
                    {parseTags(tagsInput).map((tag) => (
                      <span 
                        key={tag} 
                        className="badge bg-primary rounded-pill shadow-sm px-2 py-1"
                        style={{ fontSize: '0.9rem' }}
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Pole załącznika */}
            <div className="row mb-3">
              <div className="col-12">
                <label htmlFor="attachment" className="form-label fs-5 fw-bold text-secondary mb-2">
                  📎 Załącznik
                </label>
                <input
                  type="file"
                  id="attachment"
                  className="form-control form-control-lg rounded-3 border-2 shadow-sm"
                  onChange={handleFileChange}
                  accept="image/*,.pdf,.doc,.docx,.txt,.zip,.rar"
                  style={{ fontSize: '1rem' }}
                />
                <div className="form-text text-muted">
                  Maksymalny rozmiar: 5MB. Obsługiwane formaty: obrazy, PDF, dokumenty, archiwakrze
                </div>
                {selectedFile && (
                  <div className="mt-2">
                    <div className="alert alert-info py-2 px-3 rounded-3 d-flex align-items-center justify-content-between">
                      <div>
                        <small className="fw-bold">Wybrany plik:</small><br />
                        <span className="text-primary">{selectedFile.name}</span>
                        <small className="text-muted ms-2">({(selectedFile.size / 1024).toFixed(1)} KB)</small>
                      </div>
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-danger"
                        onClick={() => setSelectedFile(null)}
                        title="Usuń załącznik"
                      >
                        ✕
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <hr className="my-3" style={{ margin: '1rem 0', flexShrink: 0 }} />

            <div className="d-flex justify-content-between align-items-center gap-2" style={{ flexShrink: 0 }}>
              <button
                type="button"
                onClick={() => setIsFavorite(!isFavorite)}
                className={`btn rounded-3 shadow-sm px-3 py-2 fw-bold ${
                  isFavorite 
                    ? 'btn-danger' 
                    : 'btn-outline-danger'
                }`}
              >
                {isFavorite ? (
                  <HeartSolid 
                    className="me-1 text-white" 
                    style={{ width: '18px', height: '18px' }} 
                  />
                ) : (
                  <HeartIcon 
                    className="me-1 text-danger" 
                    style={{ width: '18px', height: '18px' }} 
                  />
                )}
                Ulubiona
              </button>

              <button
                type="submit"
                disabled={submitting}
                className="btn btn-primary btn-lg rounded-3 shadow px-4 py-2 fs-5 fw-bold"
              >
                {submitting ? (
                  <>
                    <div className="spinner-border spinner-border-sm me-2" role="status">
                      <span className="visually-hidden">Ładowanie...</span>
                    </div>
                    Zapisywanie...
                  </>
                ) : (
                  <>
                    Dodaj notatkę 📝
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
