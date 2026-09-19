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
        canvas: "#FAFAF9",
        surface: "#FFFFFF",
        "surface-2": "#FFFFFF",
        "surface-3": "#F4F4F5",
        ink: "#18181B",
        "ink-muted": "#71717A",
        "ink-faint": "#A1A1AA",
        signal: {
          DEFAULT: "#F97316",
          dim: "#EA580C",
          faint: "#FFF7ED",
        },
        live: {
          DEFAULT: "#16A34A",
          dim: "#15803D",
          faint: "#F0FDF4",
        },
        danger: "#DC2626",
        border: "#E4E4E7",
      },
      borderRadius: {
        xl2: "0.875rem",
      },
      boxShadow: {
        "window-frame":
          "0 16px 48px -28px rgba(24, 24, 27, 0.18), 0 0 0 1px rgba(228, 228, 231, 0.9)",
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
