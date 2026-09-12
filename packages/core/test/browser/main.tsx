import { createSignal, Match, Show, Switch } from "solid-js";
import { render } from "solid-js/web";
import { PyConfig, PyScript, PyScriptProvider } from "pyscript-solid";

const scenario = new URLSearchParams(location.search).get("scenario");
const configuredCode = `from pyscript import config, display
display(config["greeting"], target="output")`;

function Remount() {
  const [mounted, setMounted] = createSignal(true);
  return (
    <>
      <button onClick={() => setMounted(!mounted())}>
        {mounted() ? "Unmount Python" : "Mount Python"}
      </button>
      <div id="mount-count">0</div>
      <Show when={mounted()}>
        <PyScriptProvider>
          <PyScript target="mount-count">{`from pyscript import document
counter = document.getElementById("mount-count")
counter.textContent = str(int(counter.textContent) + 1)`}</PyScript>
        </PyScriptProvider>
      </Show>
    </>
  );
}

render(
  () => (
    <Switch>
      <Match when={scenario === "remount"}>
        <Remount />
      </Match>
      <Match when={scenario !== "remount"}>
        <PyScriptProvider>
          <div id="output" />
          <Switch>
            <Match when={scenario === "global-config"}>
              <PyConfig>
                {'{"greeting":"Hello from global configuration"}'}
              </PyConfig>
              <PyScript>{configuredCode}</PyScript>
            </Match>
            <Match when={scenario === "inline-config"}>
              <PyScript config={{ greeting: "Hello from an object" }}>
                {configuredCode}
              </PyScript>
            </Match>
            <Match when={scenario === "file-config"}>
              <PyScript config="/config.json">{configuredCode}</PyScript>
            </Match>
            <Match when={scenario === "python-error"}>
              <PyScript>
                {'raise ValueError("Python failure is visible")'}
              </PyScript>
            </Match>
          </Switch>
        </PyScriptProvider>
      </Match>
    </Switch>
  ),
  document.getElementById("root")!,
);
