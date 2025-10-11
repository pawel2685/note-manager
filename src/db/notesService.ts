import { db } from './notesDB';
import { type Note, type NewNote } from '../types/note';
import { v4 as uuidv4 } from 'uuid';

export async function addNote(newNote: NewNote): Promise<string> {
  const now = Date.now();
  const note: Note = {
    id: uuidv4(),
    ...newNote,
    createdAt: now,
    updatedAt: now,
  };

  return await db.notes.add(note);
}

export async function getAllNotes(): Promise<Note[]> {
  return await db.notes.orderBy('updatedAt').reverse().toArray();
}

export async function updateNote(id: string, changes: Partial<Note>): Promise<void> {
  await db.notes.update(id, { ...changes, updatedAt: Date.now() });
}

export async function deleteNote(id: string): Promise<void> {
  await db.notes.delete(id);
}
