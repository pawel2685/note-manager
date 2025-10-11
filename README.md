# 📝 Menedżer Notatek

Aplikacja do zarządzania notatkami napisana w React + TypeScript z lokalna bazą danych. Umożliwia tworzenie, edycję, wyszukiwanie i filtrowanie notatek z intuicyjnym interfejem użytkownika.

## 🚀 Funkcjonalności

### ✨ Główne cechy
- **Tworzenie notatek** - Dodawanie notatek z tytułem, treścią i tagami
- **Ulubione notatki** - Oznaczanie notatek jako ulubione (❤️)
- **Wyszukiwanie** - Filtrowanie notatek po zawartości
- **Zarządzanie tagami** - Dodawanie etykiet do notatek
- **Lokalna baza danych** - Dane przechowywane w IndexedDB
- **Responsywny design** - Dostosowany do różnych rozmiarów ekranów

### 📋 Interfejs użytkownika
- **Dwupanelowy layout** - Formularz dodawania i lista notatek obok siebie
- **Filtrowanie ulubionych** - Przycisk do wyświetlania tylko ulubionych notatek
- **Search bar** - Wyszukiwanie w czasie rzeczywistym
- **Stylizowane karty** - Elegancki wygląd z cieniami i zaokrąglonymi rogami
- **Gradient background** - Nowoczesne tło z gradientem

## 🛠 Technologie

### Frontend
- **React 19** - Najnowsza wersja React z TypeScript
- **TypeScript** - Statyczne typowanie dla lepszej jakości kodu
- **Vite** - Szybki bundler i serwer deweloperski
- **Tailwind CSS** - Utility-first CSS framework
- **Bootstrap 5** - Komponenty UI i grid system

### Stylowanie
- **Tailwind CSS v4** - Główny system stylizacji
- **Bootstrap 5.3.8** - Komponenty formularzy i layoutu
- **DaisyUI** - Dodatkowe komponenty Tailwind
- **PostCSS + Autoprefixer** - Przetwarzanie CSS

### Baza danych
- **Dexie.js** - Wrapper dla IndexedDB
- **IndexedDB** - Lokalna baza danych w przeglądarce
- **UUID** - Generowanie unikalnych identyfikatorów

### Ikony
- **Heroicons** - Piękne ikony SVG od twórców Tailwind

## 📦 Wymagania

- **Node.js** w wersji 18+ (zalecane LTS)
- **npm** lub **yarn** jako menedżer pakietów
- Nowoczesna przeglądarka z obsługą ES2020+

## 🚀 Instalacja i uruchomienie

### 1. Sklonuj repozytorium
```bash
git clone [adres-repo]
cd note-manager
```

### 2. Zainstaluj zależności
```bash
npm install
```

### 3. Uruchom środowisko deweloperskie
```bash
npm run dev
```
Aplikacja będzie dostępna pod adresem `http://localhost:5173`

### 4. Budowanie do produkcji
```bash
npm run build
```

### 5. Podgląd wersji produkcyjnej
```bash
npm run preview
```

## 📚 Dostępne skrypty

| Skrypt | Opis |
|--------|------|
| `npm run dev` | Uruchamia serwer deweloperski z hot-reload |
| `npm run build` | Buduje aplikację do produkcji |
| `npm run lint` | Uruchamia ESLint do sprawdzania kodu |
| `npm run preview` | Podgląd zbudowanej wersji |

## 🏗 Struktura projektu

```
src/
├── components/           # Komponenty React
│   ├── AddNoteForm.tsx  # Formularz dodawania notatek
│   ├── NotesList.tsx    # Lista i filtrowanie notatek
│   └── Header.tsx       # Nagłówek aplikacji
├── hooks/               # Custom React hooks
│   └── useNotes.ts      # Hook do zarządzania notatkami
├── db/                  # Warstwa bazy danych
│   ├── notesDB.ts       # Konfiguracja Dexie
│   └── notesService.ts  # Operacje CRUD
├── types/               # Definicje TypeScript
│   └── note.ts          # Typy dla notatek
├── utils/               # Funkcje pomocnicze
│   └── tagUtils.ts      # Parsowanie tagów
├── App.tsx              # Główny komponent aplikacji
├── main.tsx             # Punkt wejścia React
└── index.css            # Globalne style CSS
```

## 💾 Model danych

### Typ `Note`
```typescript
interface Note {
  id: string;              // Unikalny identyfikator
  title: string;           // Tytuł notatki
  content: string;         // Treść notatki
  tags: string[];          // Lista tagów
  isFavorite: boolean;     // Czy notatka jest ulubiona
  createdAt: number;       // Data utworzenia (timestamp)
  updatedAt: number;       // Data ostatniej modyfikacji
  attachmentPath?: string; // Opcjonalna ścieżka do załącznika
}
```

### Typ `NewNote`
```typescript
interface NewNote {
  title: string;
  content: string;
  tags: string[];
  isFavorite: boolean;
}
```

## 🎨 Funkcjonalności UI

### Formularz dodawania notatek
- **Walidacja** - Sprawdzanie wymaganych pól
- **Tagi** - Dodawanie przecinkami
- **Przycisk ulubiona** - Toggle z animacją serduszka
- **Auto-resize** - Pole treści dostosowuje się do zawartości

### Lista notatek
- **Filtrowanie ulubionych** - Przycisk z czerwonym tłem gdy aktywny
- **Wyszukiwanie** - Search bar z ikoną lupki
- **Kombinowane filtry** - Wyszukiwanie + ulubione jednocześnie
- **Akcje na notatkach** - Usuwanie i toggle ulubionej
- **Responsive cards** - Eleganckie karty z metadanymi

### Stany aplikacji
- **Loading state** - Spinner podczas ładowania
- **Empty state** - Komunikat gdy brak notatek
- **No favorites** - Specjalny komunikat dla pustych ulubionych
- **No search results** - Komunikat gdy brak wyników wyszukiwania

## ⚙️ Konfiguracja

### Pliki konfiguracyjne
- `tailwind.config.js` - Konfiguracja Tailwind CSS
- `postcss.config.js` - PostCSS z Tailwind i Autoprefixer
- `vite.config.ts` - Konfiguracja Vite
- `tsconfig.json` - Konfiguracja TypeScript
- `eslint.config.js` - Reguły ESLint

### Ustawienia VS Code
Projekt zawiera `.vscode/settings.json` z konfiguracją:
- Ignorowanie ostrzeżeń "unknown at-rule" dla dyrektyw Tailwind
- Odpowiednie formatowanie kodu

## 🐛 Rozwiązywanie problemów

### Typowe błędy

**"unknown at-rule" w CSS**
- To normalne dla dyrektyw Tailwind (`@tailwind base;`)
- Zignorowane w ustawieniach VS Code

**Błędy TypeScript**
```bash
npm run build  # Sprawdź błędy kompilacji
```

**Problemy z zależnościami**
```bash
rm -rf node_modules package-lock.json
npm install
```

**Port zajęty**
```bash
# Vite automatycznie znajdzie wolny port
# lub ustaw konkretny port w vite.config.ts
```

## 🚀 Deployment

### GitHub Pages
```bash
npm run build
# Upload zawartości dist/ do GitHub Pages
```

### Netlify
```bash
# Build command: npm run build
# Publish directory: dist
```

### Vercel
```bash
# Framework: Vite
# Build command: npm run build
# Output directory: dist
```

## 🔮 Możliwe rozszerzenia

### Funkcjonalności
- [ ] Edycja notatek w miejscu
- [ ] Kategorie notatek
- [ ] Eksport do plików
- [ ] Import z innych formatów
- [ ] Synchronizacja w chmurze
- [ ] Współdzielenie notatek
- [ ] Dark/Light mode toggle
- [ ] Kopia zapasowa danych

### Techniczne
- [ ] Testy jednostkowe (Vitest)
- [ ] Testy E2E (Playwright)
- [ ] PWA (Progressive Web App)
- [ ] Offline support
- [ ] CI/CD z GitHub Actions
- [ ] Docker containerization
- [ ] Performance monitoring

##

