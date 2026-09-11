import { PyScript, PyScriptProvider } from "pyscript-solid";
import type { Component } from "solid-js";

const App: Component = () => {
  return (
    <PyScriptProvider>
      <PyScript src={`${import.meta.env.BASE_URL}hello.py`} />
    </PyScriptProvider>
  );
};

export default App;
