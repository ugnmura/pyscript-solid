import { afterEach, describe, expect, test, vi } from "vitest";
import { cleanup, render } from "@solidjs/testing-library";
import { PyScriptProvider } from "../src/components/PyScriptProvider";

afterEach(() => {
  cleanup();
  document.head.replaceChildren();
  vi.restoreAllMocks();
});

describe("PyScript runtime loading", () => {
  test("loads a versioned module after its children have mounted", () => {
    const appended: { type: string; childrenMounted: boolean }[] = [];
    const append = document.head.appendChild.bind(document.head);
    vi.spyOn(document.head, "appendChild").mockImplementation((node) => {
      if (node instanceof HTMLScriptElement) {
        appended.push({
          type: node.type,
          childrenMounted: !!document.getElementById("python"),
        });
      }
      return append(node);
    });
    render(() => (
      <PyScriptProvider>
        <div id="python" />
      </PyScriptProvider>
    ));
    expect(appended).toEqual([{ type: "module", childrenMounted: true }]);
    const script = document.head.querySelector("script");
    expect(script?.src).toMatch(
      /^https:\/\/pyscript.net\/releases\/\d{4}\.\d+\.\d+\/core.js$/,
    );
    expect(document.head.querySelector("link")?.href).toBe(
      script?.src.replace("core.js", "core.css"),
    );
  });

  test("reuses the runtime across multiple providers and remounts", () => {
    const first = render(() => (
      <PyScriptProvider
        jsSource="/runtime/core.js"
        cssSource="/runtime/core.css"
      >
        First
      </PyScriptProvider>
    ));
    render(() => (
      <PyScriptProvider
        jsSource="/runtime/core.js"
        cssSource="/runtime/core.css"
      >
        Second
      </PyScriptProvider>
    ));
    expect(document.head.querySelectorAll("script")).toHaveLength(1);
    first.unmount();
    render(() => (
      <PyScriptProvider
        jsSource="/runtime/core.js"
        cssSource="/runtime/core.css"
      >
        Third
      </PyScriptProvider>
    ));
    expect(document.head.querySelectorAll("script")).toHaveLength(1);
    expect(document.head.querySelectorAll("link")).toHaveLength(1);
    expect(document.head.querySelector("script")?.getAttribute("src")).toBe(
      "/runtime/core.js",
    );
  });
});
