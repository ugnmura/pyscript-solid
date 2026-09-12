import { splitProps, type Component, type JSX } from "solid-js";

export type PyEditorProperties = Omit<
  JSX.ScriptHTMLAttributes<HTMLScriptElement>,
  "children" | "type" | "textContent" | "innerHTML"
> & {
  children?: string;
  type?: "py-editor" | "mpy-editor";
  config?: string | Record<string, unknown>;
  env?: string;
};

/** An editable Python script, evaluated in a worker when Run is clicked. */
export const PyEditor: Component<PyEditorProperties> = (props) => {
  const [local, rest] = splitProps(props, [
    "children",
    "type",
    "config",
    "env",
  ]);
  return (
    <script
      {...rest}
      type={local.type ?? "py-editor"}
      attr:config={
        typeof local.config === "object"
          ? JSON.stringify(local.config)
          : local.config
      }
      attr:env={local.env}
      textContent={local.children ?? ""}
    />
  );
};
