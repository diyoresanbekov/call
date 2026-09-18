/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: "#080B12",
        surface: "#0D111A",
        "surface-2": "#131925",
        "surface-3": "#1A2130",
        ink: "#F5F7FA",
        "ink-muted": "#9AA4B2",
        "ink-faint": "#697386",
        signal: {
          DEFAULT: "#7C5CFC",
          dim: "#6848E8",
          faint: "#261D4D",
        },
        live: "#22C55E",
        danger: "#EF4444",
        border: "#252D3A",
      },
      borderRadius: {
        xl2: "0.875rem",
      },
      boxShadow: {
        "window-frame":
          "0 24px 80px -32px rgba(0, 0, 0, 0.55), 0 0 0 1px rgba(37, 45, 58, 0.65)",
      },
      maxWidth: {
        content: "1280px",
      },
      transitionDuration: {
        DEFAULT: "200ms",
      },
    },
  },
  plugins: [],
};
