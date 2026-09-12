import { PyEditor, PyScriptProvider } from "pyscript-solid";

export default function App() {
  return (
    <PyScriptProvider>
      <PyEditor type="mpy-editor">{`from pyscript import display
display(6 * 7, target="editor-output")`}</PyEditor>
      <div id="editor-output" />
    </PyScriptProvider>
  );
}
