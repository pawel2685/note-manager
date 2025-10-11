/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [{
      dark: {
        ...require("daisyui/src/theming/themes")["dark"],
        "base-100": "#0f172a",
        "base-200": "#1e293b",
        "base-300": "#334155",
        primary: "#0ea5e9",
        secondary: "#ec4899",
        accent: "#818cf8",
      },
    }],
  },
}

