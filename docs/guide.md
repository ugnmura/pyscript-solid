# Examples

`display()` writes to the page. `print()` writes to the console unless you enable a terminal with `<PyScript terminal>`.

## Python files

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

## Editor

```tsx
import { PyEditor, PyScriptProvider } from "pyscript-solid";

<PyScriptProvider>
  <PyEditor type="mpy-editor">print(6 * 7)</PyEditor>
</PyScriptProvider>;
```

Editors download their interpreter when Run is clicked. Use `env` to share an environment between editors. For ordinary MicroPython scripts, use `<PyScript type="mpy">`.

## Worker hosting

For editors and worker scripts, add these response headers on your app's host:

```text
Cross-Origin-Opener-Policy: same-origin
Cross-Origin-Embedder-Policy: require-corp
```

They enable synchronous access to the page from a worker. The repo's editor example includes Vite configuration for this. GitHub Pages cannot set these headers; use a host that supports them for worker apps. Main-thread scripts do not need them.

## Runtime lifecycle

The provider loads the tested PyScript **2026.7.3** release as a module after its children mount. It reuses matching scripts and styles already in the document and keeps them for the page lifetime. To use a different release or self-host, set both `jsSource` and `cssSource` on the provider to matching `core.js` and `core.css` URLs. Use one runtime version per page.

Python scripts execute when mounted. Changing source or configuration props does not rerun an existing interpreter; mount a new component or use the editor. Global configuration must be present before the first runtime loads. The default runtime and Python interpreter are downloaded from external CDNs, so first execution needs network access.
