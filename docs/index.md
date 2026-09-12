# Get started

Run Python inside a Solid component.

::: info Next release
These docs cover the modernized API. npm still ships the older `1.4.0` release; use the source checkout below to try this version.
:::

## 1. Run the example

Install [Bun](https://bun.sh/) 1.4.2+ and [Node.js](https://nodejs.org/) 24.10+, then:

```sh
git clone --branch fix/modernize-pyscript https://github.com/ugnmura/pyscript-solid.git
cd pyscript-solid
bun install
bun run build
bun run --cwd examples/hello-world dev
```

Open the local URL printed by Vite. You should see **Hello World** after Python loads. The first run needs internet access to download the runtime.

## 2. Write some Python

Edit `examples/hello-world/src/App.tsx`:

```tsx
import { PyScript, PyScriptProvider } from "pyscript-solid";

export default function App() {
  return (
    <PyScriptProvider>
      <PyScript>{`from pyscript import display
display(6 * 7)`}</PyScript>
    </PyScriptProvider>
  );
}
```

Reload the page to see **42**. `display()` writes to the page; `print()` writes to the console.

## 3. Use it in your app

From `packages/core` in the built checkout, run `bun pm pack`. In your Solid app, install the resulting archive:

```sh
bun add /absolute/path/to/pyscript-solid/packages/core/pyscript-solid-1.4.0.tgz
```

Use the filename printed by `bun pm pack` if it differs. Copy the component above into your app.

Next: [load a Python file](/guide#python-files), [add an editor](/guide#editor), or browse the [API reference](/api).
