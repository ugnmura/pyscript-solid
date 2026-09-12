import { describe, expect, test } from "vitest";
import { render } from "@solidjs/testing-library";
import { PyScript } from "../src";

describe("PyScript", () => {
  test("preserves Python source as raw text in an executable Python script", () => {
    const code =
      'from pyscript import display\ndisplay("<b>hello</b> & goodbye")';
    const { container } = render(() => <PyScript>{code}</PyScript>);
    const script = container.querySelector('script[type="py"]');
    expect(script?.textContent).toBe(code);
    expect(script?.childElementCount).toBe(0);
  });

  test("passes external source, configuration, and output target to PyScript", () => {
    const { container } = render(() => (
      <PyScript
        src="/hello.py"
        config={{ packages: ["numpy"] }}
        target="result"
        id="python"
      />
    ));
    const script = container.querySelector("script");
    expect(script?.getAttribute("src")).toBe("/hello.py");
    expect(script?.getAttribute("config")).toBe('{"packages":["numpy"]}');
    expect(script?.getAttribute("target")).toBe("result");
    expect(script?.id).toBe("python");
  });

  test("omits disabled boolean attributes so they do not enable workers or terminals", () => {
    const { container } = render(() => (
      <PyScript worker={false} terminal={false} />
    ));
    const script = container.querySelector("script");
    expect(script).not.toBeNull();
    expect(script?.hasAttribute("worker")).toBe(false);
    expect(script?.hasAttribute("terminal")).toBe(false);
  });

  test("supports MicroPython workers and named terminals", () => {
    const { container } = render(() => (
      <PyScript type="mpy" worker terminal="console" config="/config.toml" />
    ));
    const script = container.querySelector('script[type="mpy"]');
    expect(script?.getAttribute("worker")).toBe("");
    expect(script?.getAttribute("terminal")).toBe("console");
    expect(script?.getAttribute("config")).toBe("/config.toml");
  });

  test("empty string attributes still enable workers and terminals", () => {
    const { container } = render(() => <PyScript worker="" terminal="" />);
    const script = container.querySelector("script");
    expect(script?.hasAttribute("worker")).toBe(true);
    expect(script?.hasAttribute("terminal")).toBe(true);
  });
});
