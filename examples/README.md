# Examples

First run `bun install --frozen-lockfile` and `bun run build` from the repository root.

| Example              | Start command                            |
| -------------------- | ---------------------------------------- |
| Inline Python        | `bun run --cwd examples/hello-world dev` |
| External Python file | `bun run --cwd examples/file-path dev`   |
| Worker editor        | `bun run --cwd examples/editor dev`      |

The editor example configures cross-origin isolation headers for synchronous worker access to the DOM. Configure the same headers on your production host.

Each example uses the built workspace library. After changing the library, rebuild it before testing an example. Python output appears on the page through `pyscript.display`; plain `print` goes to the browser console.

The external file is in `file-path/public/hello.py` so Vite copies it into the production build. Keep Python source in `public/` and use `import.meta.env.BASE_URL` when serving under a URL subpath.

To verify production behavior, run `bun run build`, `bunx playwright install chromium`, and `bun run test:e2e` from the root.
