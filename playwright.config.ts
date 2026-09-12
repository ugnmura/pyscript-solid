import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "./test/e2e",
  timeout: 180_000,
  expect: { timeout: 120_000 },
  workers: 1,
  use: { browserName: "chromium", trace: "retain-on-failure" },
  webServer: [
    {
      command:
        "bun run --cwd packages/core dev:test --host 127.0.0.1 --port 4176 --strictPort",
      url: "http://127.0.0.1:4176",
      reuseExistingServer: false,
    },
    {
      command:
        "bun run --cwd examples/editor serve --host 127.0.0.1 --port 4175 --strictPort",
      url: "http://127.0.0.1:4175",
      reuseExistingServer: !process.env.CI,
    },
    {
      command:
        "bun run --cwd examples/hello-world serve --host 127.0.0.1 --port 4173 --strictPort",
      url: "http://127.0.0.1:4173",
      reuseExistingServer: !process.env.CI,
    },
    {
      command:
        "bun run --cwd examples/file-path serve --host 127.0.0.1 --port 4174 --strictPort",
      url: "http://127.0.0.1:4174",
      reuseExistingServer: !process.env.CI,
    },
  ],
});
