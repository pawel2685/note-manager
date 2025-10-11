import { PlusIcon } from '@heroicons/react/24/outline';

export default function Header() {
  return (
    <header className="w-full max-w-4xl mx-auto py-6 px-4 flex items-center justify-between">
      <div>
        <h1 className="text-2xl font-extrabold tracking-tight">Note Manager</h1>
        <p className="text-sm text-slate-400">Prosta aplikacja do zarządzania notatkami (lokalnie w przeglądarce)</p>
      </div>

      <div className="hidden sm:flex items-center gap-3">
        <button className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-sky-500 to-indigo-500 px-3 py-2 text-sm font-medium text-white shadow-md hover:opacity-95">
          <PlusIcon className="h-4 w-4" />
          Nowa notatka
        </button>
      </div>
    </header>
  );
}
