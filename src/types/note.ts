export interface Note {
  // Unikatowy identyfikator notatki (klucz dla bazy danych)
  id: string; 
  
  // Wymagane pola
  title: string;
  content: string;
  
  // Lista słów kluczowych do wyszukiwania
  tags: string[]; 
  
  // Status ulubionej notatki
  isFavorite: boolean; 
  
  // Daty (liczba milisekund od epoki, ułatwia sortowanie)
  createdAt: number;
  updatedAt: number;
  
  // Opcjonalne pole (opcjonalność oznaczamy znakiem zapytania '?')
  attachmentPath?: string; 
}

/**
 * Definicja struktury danych wymaganych do utworzenia nowej notatki.
 * Używamy Omit do usunięcia pól generowanych automatycznie (id, daty).
 */
export type NewNote = Omit<Note, 'id' | 'createdAt' | 'updatedAt'>;