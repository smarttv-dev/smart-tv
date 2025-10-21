import legacy from "@vitejs/plugin-legacy";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    legacy({
      targets: ["chrome >= 30", "firefox >= 20", "safari >= 6", "ie >= 9"],
      additionalLegacyPolyfills: [
        "regenerator-runtime/runtime",
        "core-js/stable",
      ],
      modernPolyfills: true,
      renderLegacyChunks: true,
    }),
  ],
  build: {
    rollupOptions: {
      output: {
        entryFileNames: "assets/app.js",
        chunkFileNames: "assets/app-[name].js",
        assetFileNames: "assets/app.[ext]",
      },
    },
    cssCodeSplit: false, // Keep CSS in one file
  },
});
