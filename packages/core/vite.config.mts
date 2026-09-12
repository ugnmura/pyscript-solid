import { defineConfig } from "vitest/config";
import { fileURLToPath } from "node:url";
import solidPlugin from "vite-plugin-solid";

export default defineConfig(({ mode }) => ({
  test: {
    environment: "jsdom",
    include: ["test/**/*.test.{ts,tsx}"],
    setupFiles: ["./test/setup.ts"],
    coverage: { provider: "v8", include: ["src/**/*.{ts,tsx}"] },
  },
  plugins: [solidPlugin({ ssr: mode === "ssr" })],
  build: {
    ssr: mode === "ssr",
    outDir: mode === "ssr" ? "dist/server" : "dist",
    lib: {
      entry: fileURLToPath(new URL("./src/index.tsx", import.meta.url)),
      formats: ["es", "cjs"],
      fileName: (format) => `pyscript-solid.${format === "es" ? "mjs" : "cjs"}`,
    },
    sourcemap: true,
    target: "es2022",
    rolldownOptions: {
      external: [/^solid-js(?:\/|$)/],
    },
  },
}));
