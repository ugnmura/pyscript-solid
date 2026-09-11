# PyScript Solid

Run Python in Solid applications with [PyScript](https://docs.pyscript.net/2026.7.3/).

## Install

```sh
bun add pyscript-solid solid-js
```

npm, pnpm, and Yarn also work for consuming the library.

## Inline Python

```tsx
import { PyScript, PyScriptProvider } from "pyscript-solid";

export default function App() {
  return (
    <PyScriptProvider>
      <PyScript>{`from pyscript import display
display("Hello World")`}</PyScript>
    </PyScriptProvider>
  );
}
```

`display()` writes to the page. `print()` writes to the console unless you enable a terminal with `<PyScript terminal>`.

## External files and configuration

Put `hello.py` in your Vite app's `public/` directory so it is included in production builds:

```tsx
<PyScriptProvider>
  <div id="result" />
  <PyScript
    src={`${import.meta.env.BASE_URL}hello.py`}
    target="result"
    config={{ packages: ["numpy"] }}
  />
</PyScriptProvider>
```

`config` accepts an object, inline JSON, or a JSON/TOML file URL. For shared main-thread configuration, place one `<PyConfig>` containing JSON or TOML before the scripts. Editors require their own `config` prop.

## Editor and MicroPython

```tsx
import { PyEditor, PyScriptProvider } from "pyscript-solid";

<PyScriptProvider>
  <PyEditor type="mpy-editor">print(6 * 7)</PyEditor>
</PyScriptProvider>;
```

Editors download their interpreter when Run is clicked. Use `env` to share an environment between editors. For ordinary MicroPython scripts, use `<PyScript type="mpy">`.

`PyScript` supports `worker`, `terminal`, and `async`. When hosting worker scripts or editors, configure cross-origin isolation headers (`Cross-Origin-Opener-Policy: same-origin` and `Cross-Origin-Embedder-Policy: require-corp`) for PyScript's synchronous worker-to-main-thread access. Ordinary main-thread examples do not need these headers.

## Runtime lifecycle

The provider loads the tested PyScript **2026.7.3** release as a module after its children mount. It reuses matching scripts and styles already in the document and keeps them for the page lifetime. To use a different release or self-host, set both `jsSource` and `cssSource` on the provider to matching `core.js` and `core.css` URLs. Use one runtime version per page.

Python scripts execute when mounted. Changing source or configuration props does not rerun an existing interpreter; mount a new component or use the editor. Global configuration must be present before the first runtime loads. The default runtime and Python interpreter are downloaded from external CDNs, so first execution needs network access.

## Migration from the alpha wrapper

This modernization includes breaking changes and should be published as a new major version.

| Previous API                                 | Current replacement                                                       |
| -------------------------------------------- | ------------------------------------------------------------------------- |
| `PyScript` rendering `<py-script>`           | Renders `<script type="py">` with raw Python text                         |
| `output`                                     | `target` with an element ID                                               |
| `outputMode`, `stdOut`, `stdErr`, `execId`   | Removed; use current PyScript display, terminal, and event APIs           |
| `PyRepl`                                     | `PyEditor`; `PyRepl` remains a deprecated alias                           |
| `PyEnv` with YAML packages                   | `config={{ packages: [...] }}` or `PyConfig` with JSON/TOML               |
| `PyBox`, `PyButton`, `PyInputBox`, `PyTitle` | Native Solid/HTML elements; bind Python events with PyScript's `when` API |
| `PyRegisterWidget`                           | Native components and the current PyScript DOM API                        |
| UMD bundle                                   | ESM and CommonJS browser/server exports with TypeScript declarations      |

The alpha-only widget exports were removed because current PyScript does not implement them. See the [current PyScript documentation](https://docs.pyscript.net/2026.7.3/) for Python-side migration.
