# note-manager

Projekt "note-manager" to mała aplikacja frontendowa napisana w React + TypeScript, zbudowana przy pomocy Vite i Tailwind CSS.

## Krótkie podsumowanie

- Framework: React 19 + TypeScript
- Bundler / dev server: Vite
- Stylowanie: Tailwind CSS (v4) + PostCSS + Autoprefixer
- Linter: ESLint (skrypt `lint` w `package.json` uruchamia `eslint .`)

## Wymagania

- Node.js (zalecane LTS, np. 18+)
- npm (lub yarn/pnpm) — projekt używa `package.json` i `package-lock.json`

## Uruchomienie lokalne

1. Zainstaluj zależności:

```powershell
npm install
```

2. Uruchom środowisko developerskie (hot-reload):

```powershell
npm run dev
```

3. Budowanie aplikacji do produkcji:

```powershell
npm run build
```

4. Podgląd zbudowanej wersji (po `build`):

```powershell
npm run preview
```

## Dostępne skrypty (z `package.json`)

- `dev` — uruchamia Vite dev server
- `build` — uruchamia `tsc -b` (build TypeScript projektów referencyjnych) i `vite build`
- `lint` — uruchamia ESLint (`eslint .`)
- `preview` — uruchamia `vite preview` do lokalnego podglądu katalogu `dist`

## Konfiguracja projektu (ważne pliki)

- `index.html` — punkt wejścia; ładuje `/src/main.tsx`
- `src/main.tsx` — root React + import `index.css`
- `src/index.css` — zawiera podstawowe reguły CSS i dyrektywy Tailwind:
  - `@tailwind base;`
  - `@tailwind components;`
  - `@tailwind utilities;`
- `tailwind.config.js` — konfiguracja Tailwind (content wskazuje na `index.html` i `src/**/*`)
- `postcss.config.js` — używa `tailwindcss` i `autoprefixer`
- `vite.config.ts` — konfiguracja Vite (plugins: `@vitejs/plugin-react`)
- `tsconfig.json`, `tsconfig.app.json`, `tsconfig.node.json` — konfiguracja TypeScript

## Notatki o Tailwind i edytorze

W plikach CSS są używane dyrektywy Tailwind (`@tailwind ...`), które nie są standardowymi at-rule CSS — niektóre edytory lub wtyczki mogą ostrzegać "unknown at rule". W repo dodałem ustawienie VS Code, które to ignoruje (lokalne ustawienia workspace `.vscode/settings.json`). Jeśli wolisz, zamiast tego można skonfigurować stylelint lub zainstalować rozszerzenie VS Code rozumiejące Tailwind.

## Linting

Projekt ma skonfigurowany skrypt `lint` uruchamiający ESLint. Jeśli chcesz dodać sprawdzanie stylów CSS (stylelint) lub reguły specyficzne dla Tailwind, mogę pomóc dodać konfigurację i skrypt `stylelint`.

## Debugowanie / typowe problemy

- Błąd "unknown at rule": to normalne przy dyrektywach Tailwind — zaakceptowano rozwiązanie poprzez ustawienia VS Code w `.vscode/settings.json`.
- Brak zainstalowanych zależności: uruchom `npm install`.
- Błędy TypeScript: uruchom `npm run build` (`tsc -b`) aby zobaczyć błędy typów.

## Propozycje usprawnień (opcjonalne)

- Dodać `stylelint` i reguły, aby linter rozpoznawał dyrektywy Tailwind.
- Dodać testy jednostkowe (Jest / Vitest) oraz skrypt `test`.
- Dodać konfigurację CI (GitHub Actions) do budowania i lintowania przy PR.
- Rozszerzyć README o instrukcję deploymentu (np. GitHub Pages / Netlify / Vercel).

## Kontakt / dalsze kroki

Jeżeli chcesz, mogę:
- dodać `stylelint` i konfigurację dla Tailwind,
- dodać prosty workflow CI (np. GitHub Actions) z build + lint,
- rozbudować README o instrukcje deploymentu.

Powiedz, które z tych opcji wolisz — wprowadzę zmiany.
# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
