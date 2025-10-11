# 📝 Menedżer Notatek

Nowoczesna aplikacja do zarządzania notatkami zbudowana w React + TypeScript z wykorzystaniem Bootstrap i Tailwind CSS. Oferuje zaawansowane funkcje jak edycja w miejscu, system załączników, oraz kompleksowe wyszukiwanie.

## 🚀 Funkcjonalności

### ✨ Główne cechy
- **Tworzenie notatek** - Dodawanie notatek z tytułem, treścią i tagami
- **Edycja w miejscu** - Bezpośrednia edycja notatek bez przechodzenia do osobnego formularza
- **System załączników** - Dodawanie plików (obrazy, dokumenty) z podglądem miniatur
- **Ulubione notatki** - Oznaczanie notatek jako ulubione (❤️)
- **Zaawansowane wyszukiwanie** - Filtrowanie po tytule, treści i tagach (z przedrostkiem #)
- **Zarządzanie tagami** - Dodawanie etykiet do notatek z inteligentnym wyszukiwaniem
- **Lokalna baza danych** - Dane przechowywane w IndexedDB z Dexie.js
- **Fixed viewport layout** - Stabilny układ bez przewijania całej strony
- **Responsywny design** - Dostosowany do wszystkich rozmiarów ekranów

### 📋 Interfejs użytkownika
- **Dwupanelowy layout** - Formularz dodawania i lista notatek w fixed containers
- **Bootstrap + Tailwind** - Hybrydowe podejście do stylowania
- **Filtrowanie ulubionych** - Przycisk do wyświetlania tylko ulubionych notatek
- **Inteligentny search bar** - Wyszukiwanie w czasie rzeczywistym z podświetlaniem
- **Stylizowane karty** - Eleganckie karty z metadanymi i załącznikami
- **Hover effects** - Płynne animacje i interaktywne przejścia
- **Professional UI** - Nowoczesny design z czystymi liniami

## 🛠 Technologie

### Frontend
- **React 19** - Najnowsza wersja React z TypeScript
- **TypeScript** - Statyczne typowanie dla lepszej jakości kodu
- **Vite** - Szybki bundler i serwer deweloperski
- **Bootstrap 5.3.8** - Komponenty UI i responsive grid system
- **Tailwind CSS v4** - Utility-first CSS framework dla custom styling
- **Heroicons** - Profesjonalne ikony SVG

### Backend/Storage
- **Dexie.js 4.2.1** - Wrapper dla IndexedDB z zaawansowanymi zapytaniami
- **IndexedDB** - Lokalna baza danych w przeglądarce
- **Base64 encoding** - Przechowywanie załączników jako embedded data

### Stylowanie
- **Bootstrap + Tailwind hybrid** - Kombinacja frameworków dla optymalnej funkcjonalności
- **Pure CSS layout** - Custom positioning dla fixed viewport
- **PostCSS + Autoprefixer** - Przetwarzanie CSS

### Baza danych
- **Dexie.js 4.2.1** - Wrapper dla IndexedDB z TypeScript support
- **IndexedDB** - Lokalna baza danych w przeglądarce
- **UUID** - Generowanie unikalnych identyfikatorów

### Ikony
- **Heroicons** - Profesjonalne ikony SVG w React components

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
│   ├── AddNoteForm.tsx  # Formularz dodawania notatek z upload plików
│   ├── NotesList.tsx    # Lista z edycją w miejscu i załącznikami
│   └── Header.tsx       # Nagłówek aplikacji
├── hooks/               # Custom React hooks
│   └── useNotes.ts      # Hook do zarządzania notatkami
├── db/                  # Warstwa bazy danych
│   ├── notesDB.ts       # Konfiguracja Dexie z attachment support
│   └── notesService.ts  # Operacje CRUD
├── types/               # Definicje TypeScript
│   └── note.ts          # Typy dla notatek i załączników
├── utils/               # Funkcje pomocnicze
│   └── tagUtils.ts      # Parsowanie tagów
├── App.tsx              # Fixed viewport layout
├── main.tsx             # Punkt wejścia React
└── index.css            # Globalne style CSS + Bootstrap integration
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
  attachments?: Attachment[]; // Załączniki (obrazy, dokumenty)
}
```

### Typ `Attachment`
```typescript
interface Attachment {
  id: string;              // Unikalny identyfikator załącznika
  name: string;            // Nazwa pliku
  type: string;            // MIME type pliku
  size: number;            // Rozmiar w bajtach
  data: string;            // Zawartość pliku zakodowana w base64
  createdAt: number;       // Data dodania
}
```

### Typ `NewNote`
```typescript
interface NewNote {
  title: string;
  content: string;
  tags: string[];
  isFavorite: boolean;
  attachments?: File[];    // Pliki do załączenia
}
```

## 🎨 Funkcjonalności UI

### Formularz dodawania notatek
- **Walidacja** - Sprawdzanie wymaganych pól z komunikatami błędów
- **Tagi** - Dodawanie przecinkami z podglądem w czasie rzeczywistym
- **Przycisk ulubiona** - Toggle z animacją serduszka
- **Upload plików** - Drag & drop oraz kliknięcie dla wyboru plików
- **Auto-resize** - Pole treści dostosowuje się do zawartości
- **Scrollable container** - Optymalizacja dla długich formularzy

### Lista notatek
- **Edycja w miejscu** - Kliknij tytuł lub treść aby edytować bezpośrednio
- **Filtrowanie ulubionych** - Przycisk z czerwonym tłem gdy aktywny
- **Zaawansowane wyszukiwanie** - Search bar z obsługą tagów (#tag)
- **Kombinowane filtry** - Wyszukiwanie + ulubione jednocześnie
- **Podgląd załączników** - Miniatury obrazów, ikony dla dokumentów
- **Pobieranie plików** - Kliknij załącznik aby pobrać
- **Akcje na notatkach** - Usuwanie, toggle ulubionej, edycja inline
- **Responsive cards** - Eleganckie karty z metadanymi i hover effects

### System załączników
- **Obsługa formatów** - Obrazy (JPEG, PNG, GIF), dokumenty (PDF, DOC, TXT)
- **Podgląd obrazów** - Automatyczne wyświetlanie miniatur w notatkach
- **Informacje o plikach** - Nazwa, rozmiar, typ pliku
- **Base64 storage** - Bezpieczne przechowywanie w IndexedDB
- **Download functionality** - Pobieranie załączników z przywróceniem nazwy

### Wyszukiwanie i filtrowanie
- **Wyszukiwanie tekstu** - W tytułach i treści notatek
- **Wyszukiwanie tagów** - Specjalne zapytania z # (np. #projekt)
- **Podświetlanie wyników** - Wizualne oznaczanie znalezionych fraz
- **Real-time search** - Filtrowanie w czasie rzeczywistym
- **Case-insensitive** - Wyszukiwanie bez rozróżniania wielkości liter

### Stany aplikacji
- **Loading state** - Spinner podczas ładowania danych
- **Empty state** - Elegancki komunikat gdy brak notatek
- **No favorites** - Specjalny komunikat dla pustych ulubionych
- **No search results** - Komunikat gdy brak wyników wyszukiwania
- **Edit mode** - Wizualne oznaczenie trybu edycji inline

### Layout i responsywność
- **Fixed viewport** - Stabilny układ bez przewijania całej strony
- **Dual-panel** - Formularz i lista w osobnych kontenerach
- **Scroll optimization** - Niezależne przewijanie sekcji
- **Mobile-friendly** - Dostosowanie do urządzeń mobilnych
- **Hover animations** - Płynne przejścia i efekty

## ⚙️ Konfiguracja

### Pliki konfiguracyjne
- `tailwind.config.js` - Konfiguracja Tailwind CSS v4 z hybrydowym Bootstrap
- `postcss.config.js` - PostCSS z Tailwind i Autoprefixer
- `vite.config.ts` - Konfiguracja Vite z TypeScript support
- `tsconfig.json` - Konfiguracja TypeScript ze ścisłymi regułami
- `eslint.config.js` - Reguły ESLint dla React i TypeScript

### Ustawienia VS Code
Projekt zawiera `.vscode/settings.json` z konfiguracją:
- Ignorowanie ostrzeżeń "unknown at-rule" dla dyrektyw Tailwind
- Odpowiednie formatowanie kodu TypeScript i CSS
- Integracja z ESLint i Prettier

## 🔧 Użytkowanie

### Dodawanie notatek
1. Wypełnij tytuł i treść w formularzu po lewej stronie
2. Dodaj tagi oddzielone przecinkami (opcjonalne)
3. Oznacz jako ulubioną klikając serduszko (opcjonalne)
4. Załącz pliki używając przycisku "Choose Files" lub drag & drop
5. Kliknij "Dodaj notatkę" aby zapisać

### Edycja notatek
1. Znajdź notatkę na liście po prawej stronie
2. Kliknij na tytuł lub treść notatki aby ją edytować
3. Wprowadź zmiany bezpośrednio w polach
4. Kliknij "Zapisz" aby potwierdzić lub "Anuluj" aby odrzucić

### Wyszukiwanie i filtrowanie
- **Podstawowe wyszukiwanie**: Wpisz tekst w search bar
- **Wyszukiwanie tagów**: Użyj # przed tagiem (np. #projekt)
- **Filtr ulubionych**: Kliknij przycisk "Pokaż tylko ulubione"
- **Kombinowanie**: Użyj filtrów jednocześnie dla precyzyjnych wyników

### Załączniki
- **Dodawanie**: Przeciągnij pliki na obszar upload lub kliknij wybór plików
- **Podgląd**: Obrazy wyświetlają się jako miniatury w notatkach
- **Pobieranie**: Kliknij nazwę załącznika aby go pobrać

## 🐛 Rozwiązywanie problemów

### Typowe błędy

**Problemy z layout/przewijaniem**
- Sprawdź czy kontener ma poprawną wysokość viewport (100vh)
- Upewnij się że używasz position: fixed dla głównych kontenerów

**"unknown at-rule" w CSS**
- To normalne dla dyrektyw Tailwind (`@tailwind base;`)
- Zignorowane w ustawieniach VS Code

**Błędy z załącznikami**
- Sprawdź limit rozmiaru pliku (max 10MB)
- Upewnij się że przeglądarka obsługuje FileReader API

**Błędy TypeScript**
```bash
npm run build  # Sprawdź błędy kompilacji
```

**Problemy z IndexedDB**
- Sprawdź czy przeglądarka obsługuje IndexedDB
- Wyczyść dane przeglądarki jeśli wystąpią problemy z bazą

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
- [x] **Edycja notatek w miejscu** - Zaimplementowane ✅
- [x] **System załączników** - Zaimplementowany ✅
- [x] **Zaawansowane wyszukiwanie** - Zaimplementowane ✅
- [ ] Kategorie notatek z kolorami
- [ ] Eksport do plików (JSON, Markdown, PDF)
- [ ] Import z innych formatów
- [ ] Synchronizacja w chmurze
- [ ] Współdzielenie notatek
- [ ] Dark/Light mode toggle
- [ ] Kopia zapasowa i przywracanie danych
- [ ] Powiadomienia i przypomnienia
- [ ] Rich text editor (WYSIWYG)

### Techniczne
- [ ] Testy jednostkowe (Vitest)
- [ ] Testy E2E (Playwright)
- [ ] PWA (Progressive Web App)
- [ ] Offline support z Service Workers
- [ ] CI/CD z GitHub Actions
- [ ] Docker containerization
- [ ] Performance monitoring

##