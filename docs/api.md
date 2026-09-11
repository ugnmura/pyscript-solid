# API reference

Import components and their TypeScript prop types from `pyscript-solid`.

## PyScriptProvider

Loads PyScript **2026.7.3** after its children mount. Matching runtime assets are reused for the page lifetime.

```tsx
<PyScriptProvider>
  <PyScript>print("Hello")</PyScript>
</PyScriptProvider>
```

| Prop        | Type          | Default                 |
| ----------- | ------------- | ----------------------- |
| `children`  | `JSX.Element` | —                       |
| `jsSource`  | `string`      | PyScript CDN `core.js`  |
| `cssSource` | `string`      | PyScript CDN `core.css` |

For self-hosting, set both source URLs to matching runtime files. Use one runtime version per page. Sources are read on mount.

Type: `PyScriptProviderProperties`. The tested version is also exported as `PYSCRIPT_VERSION`.

## PyScript

Renders a `<script type="py">` element and runs Python when mounted.

```tsx
<PyScript target="result">{`from pyscript import display
display(6 * 7)`}</PyScript>
```

| Prop       | Type                                | Default / purpose                               |
| ---------- | ----------------------------------- | ----------------------------------------------- |
| `children` | `string`                            | Inline Python                                   |
| `src`      | `string`                            | Python file URL; use instead of inline code     |
| `type`     | `"py" \| "mpy"`                     | `"py"` (Pyodide); `"mpy"` for MicroPython       |
| `config`   | `string \| Record<string, unknown>` | Object, inline JSON, or JSON/TOML URL           |
| `target`   | `string`                            | Output element ID                               |
| `worker`   | `boolean \| string`                 | Enable a worker or name one; omitted by default |
| `terminal` | `boolean \| string`                 | Enable terminal output; omitted by default      |
| `async`    | `boolean`                           | Enable async execution; omitted by default      |

Native script attributes, Solid event handlers, and `ref` are supported. `innerHTML` and `textContent` are excluded; pass Python through `children`.

Changing props does not rerun Python. Mount a new component to execute again. See [worker hosting](/guide#worker-hosting) before using `worker`.

Type: `PyScriptProperties`.

## PyEditor

An editable script that loads its interpreter and runs in a worker when **Run** is clicked.

```tsx
<PyEditor type="mpy-editor">print(6 * 7)</PyEditor>
```

| Prop       | Type                                | Default / purpose        |
| ---------- | ----------------------------------- | ------------------------ |
| `children` | `string`                            | Initial Python code      |
| `src`      | `string`                            | External Python file URL |
| `type`     | `"py-editor" \| "mpy-editor"`       | `"py-editor"`            |
| `config`   | `string \| Record<string, unknown>` | Editor configuration     |
| `env`      | `string`                            | Shared environment name  |

Native script attributes are supported. Editors need their own `config`; `PyConfig` does not apply. See [worker hosting](/guide#worker-hosting).

Type: `PyEditorProperties`. `PyRepl` and `PyReplProperties` are deprecated aliases.

## PyConfig

Shared main-thread configuration. Place one before your scripts, before the runtime first loads.

```tsx
<PyConfig>{JSON.stringify({ packages: ["numpy"] })}</PyConfig>
```

| Prop       | Type                | Purpose           |
| ---------- | ------------------- | ----------------- |
| `children` | `string` (required) | JSON or TOML text |

Native HTML attributes are supported. Type: `PyConfigProperties`.

For Python-side APIs, see the [PyScript documentation](https://docs.pyscript.net/2026.7.3/).
