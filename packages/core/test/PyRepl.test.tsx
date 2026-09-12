import { expect, test } from "vitest";
import { render } from "@solidjs/testing-library";
import { PyRepl } from "../src";

test("the REPL uses the current editor with its own configuration and environment", () => {
  const { container } = render(() => (
    <PyRepl config={{ packages: ["numpy"] }} env="shared">
      print(6 * 7)
    </PyRepl>
  ));
  const script = container.querySelector('script[type="py-editor"]');
  expect(script?.textContent).toBe("print(6 * 7)");
  expect(script?.getAttribute("config")).toBe('{"packages":["numpy"]}');
  expect(script?.getAttribute("env")).toBe("shared");
});
