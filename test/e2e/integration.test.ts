import { expect, test } from "@playwright/test";
import { captureRuntimeErrors } from "./runtime-errors";

for (const [scenario, output] of [
  ["global-config", "Hello from global configuration"],
  ["inline-config", "Hello from an object"],
  ["file-config", "Hello from a configuration file"],
]) {
  test(`${scenario} reaches the Python interpreter`, async ({ page }) => {
    const errors = captureRuntimeErrors(page);
    await page.goto(`http://127.0.0.1:4176/?scenario=${scenario}`);
    await expect(page.locator("#output")).toHaveText(output);
    expect(errors).toEqual([]);
  });
}

test("Python executes on every remount without reloading the runtime", async ({
  page,
}) => {
  const errors = captureRuntimeErrors(page);
  await page.goto("http://127.0.0.1:4176/?scenario=remount");
  await expect(page.locator("#mount-count")).toHaveText("1");
  for (const count of ["2", "3"]) {
    await page.getByRole("button", { name: "Unmount Python" }).click();
    await expect(page.locator('script[type="py"]')).toHaveCount(0);
    await page.getByRole("button", { name: "Mount Python" }).click();
    await expect(page.locator("#mount-count")).toHaveText(count);
  }
  await expect(
    page.locator('script[type="module"][src*="pyscript.net"]'),
  ).toHaveCount(1);
  expect(errors).toEqual([]);
});

test("Python exceptions are surfaced rather than silently swallowed", async ({
  page,
}) => {
  const errors: string[] = [];
  page.on("console", (message) => {
    if (message.type() === "error") errors.push(message.text());
  });
  page.on("pageerror", (error) => errors.push(error.message));
  await page.goto("http://127.0.0.1:4176/?scenario=python-error");
  await expect
    .poll(() => errors.join("\n"))
    .toContain("ValueError: Python failure is visible");
});
