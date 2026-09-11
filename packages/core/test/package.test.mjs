import assert from "node:assert/strict";
import { createRequire } from "node:module";
import { test } from "node:test";
import { renderToString } from "solid-js/web";
import { PyScript, PyScriptProvider } from "pyscript-solid";

test("the ESM package can render on the server without accessing document", () => {
  const code = 'print("<b>hello</b> & goodbye")';
  const html = renderToString(() =>
    PyScriptProvider({
      get children() {
        return PyScript({ children: code });
      },
    }),
  );
  assert.match(html, /type="py"/);
  assert.ok(html.includes(code));
});

test("CommonJS resolves to a server-safe package entry", () => {
  const require = createRequire(import.meta.url);
  const { PyScriptProvider: Provider } = require("pyscript-solid");
  assert.equal(Provider({ children: "server" }), "server");
});
