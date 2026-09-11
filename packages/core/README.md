# PyScript Solid

[![npm](https://img.shields.io/npm/v/pyscript-solid?style=flat-square)](https://www.npmjs.com/package/pyscript-solid)
[![License](https://shields.io/github/license/ugnmura/pyscript-solid?style=flat-square)](https://github.com/ugnmura/pyscript-solid/blob/main/LICENSE)

Use [PyScript](https://pyscript.net/) together with [Solid.js](https://www.solidjs.com/).

## Getting Started

### Installation

```sh
bun add pyscript-solid
# or
npm install pyscript-solid
```

### Usage

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

Find more in the [examples](https://github.com/ugnmura/pyscript-solid/tree/main/examples) and [usage guide](https://github.com/ugnmura/pyscript-solid/blob/main/docs/guide.md).

## License

[MIT](https://github.com/ugnmura/pyscript-solid/blob/main/LICENSE).
