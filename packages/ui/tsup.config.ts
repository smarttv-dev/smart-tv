import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["cjs", "esm"],
  dts: true,
  splitting: false,
  sourcemap: false, // Disabled to reduce package size (was adding 1.5MB)
  clean: true,
  external: ["react", "react-dom"],
  target: "es5",
  minify: true,
  esbuildOptions(options) {
    options.banner = {
      js: '"use client"',
    };
  },
});
