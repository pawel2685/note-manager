import Dexie, { type Table } from 'dexie';
import type { Note } from '../types/note';


export class NotesDB extends Dexie {
  notes!: Table<Note, string>;

  constructor() {
    super('NotesDB');
    this.version(1).stores({
      notes: 'id, title, tags, updatedAt, isFavorite'
    });
  }
}

export const db = new NotesDB();
