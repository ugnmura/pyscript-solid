import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";

const headers = {
  "Cross-Origin-Opener-Policy": "same-origin",
  "Cross-Origin-Embedder-Policy": "require-corp",
};

export default defineConfig({
  plugins: [solidPlugin()],
  server: { headers },
  preview: { headers },
});
