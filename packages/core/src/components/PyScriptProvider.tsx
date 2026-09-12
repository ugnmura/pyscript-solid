import { onMount, type ParentComponent } from "solid-js";

/** The PyScript release tested with this package. */
export const PYSCRIPT_VERSION = "2026.7.3";
const baseURL = `https://pyscript.net/releases/${PYSCRIPT_VERSION}`;

export interface PyScriptProviderProperties {
  /** Set both sources together when using a different PyScript release. */
  jsSource?: string;
  cssSource?: string;
}

/** Loads PyScript once, after child scripts and configuration are mounted. */
export const PyScriptProvider: ParentComponent<PyScriptProviderProperties> = (
  props,
) => {
  onMount(() => {
    const jsSource = props.jsSource ?? `${baseURL}/core.js`;
    const cssSource = props.cssSource ?? `${baseURL}/core.css`;
    const cssURL = new URL(cssSource, document.baseURI).href;
    const jsURL = new URL(jsSource, document.baseURI).href;

    if (
      ![
        ...document.querySelectorAll<HTMLLinkElement>('link[rel="stylesheet"]'),
      ].some((link) => link.href === cssURL)
    ) {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = cssSource;
      document.head.appendChild(link);
    }
    if (
      ![
        ...document.querySelectorAll<HTMLScriptElement>(
          'script[type="module"][src]',
        ),
      ].some((script) => script.src === jsURL)
    ) {
      const script = document.createElement("script");
      script.type = "module";
      script.src = jsSource;
      document.head.appendChild(script);
    }
  });

  // PyScript registers document-wide interpreters and custom elements. Its assets
  // intentionally live for the page lifetime, including across provider remounts.
  return props.children;
};
