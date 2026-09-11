import { splitProps, type Component, type JSX } from "solid-js";

export type PyScriptProperties = Omit<
  JSX.ScriptHTMLAttributes<HTMLScriptElement>,
  "children" | "type" | "src" | "async" | "textContent" | "innerHTML"
> & {
  children?: string;
  src?: string;
  type?: "py" | "mpy";
  config?: string | Record<string, unknown>;
  target?: string;
  worker?: boolean | string;
  terminal?: boolean | string;
  async?: boolean;
};

/** Python source and configuration are read once, when the element mounts. */
export const PyScript: Component<PyScriptProperties> = (props) => {
  const [local, rest] = splitProps(props, [
    "children",
    "src",
    "type",
    "config",
    "target",
    "worker",
    "terminal",
    "async",
  ]);
  return (
    <script
      {...rest}
      type={local.type ?? "py"}
      src={local.src}
      attr:config={
        typeof local.config === "object"
          ? JSON.stringify(local.config)
          : local.config
      }
      attr:target={local.target}
      attr:worker={
        local.worker === false
          ? undefined
          : local.worker === true
            ? ""
            : local.worker
      }
      attr:terminal={
        local.terminal === false
          ? undefined
          : local.terminal === true
            ? ""
            : local.terminal
      }
      attr:async={local.async ? "" : undefined}
      textContent={local.children ?? ""}
    />
  );
};
