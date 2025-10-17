import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['cjs', 'esm'],
  dts: true,
  splitting: false,
  sourcemap: false, // Disable sourcemaps for smaller bundle
  clean: true,
  external: ['react', 'react-dom', 'shaka-player', '@smart-tv/ui'],
  target: 'es5', 
  minify: true, // Enable minification for production
  esbuildOptions(options) {
    options.banner = {
      js: '"use client"',
    };
  },
});
