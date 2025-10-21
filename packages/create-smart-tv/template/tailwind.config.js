/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1a1a1a",
        secondary: "#2a2a2a",
        accent: "#0070f3",
      },
    },
  },
  plugins: [],
  corePlugins: {
    // Disable features that might not work well in very old browsers
    backdropBlur: false,
    backdropBrightness: false,
    backdropContrast: false,
    backdropGrayscale: false,
    backdropHueRotate: false,
    backdropInvert: false,
    backdropOpacity: false,
    backdropSaturate: false,
    backdropSepia: false,
  },
  future: {
    // Ensure compatibility with older PostCSS versions
    hoverOnlyWhenSupported: false,
  },
};
