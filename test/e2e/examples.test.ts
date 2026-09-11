import { expect, test } from "@playwright/test";
import { captureRuntimeErrors } from "./runtime-errors";

test("the editor executes Python in a worker when Run is clicked", async ({
  page,
}) => {
  const errors = captureRuntimeErrors(page);
  await page.goto("http://127.0.0.1:4175");
  await page.getByRole("button", { name: /run/i }).click();
  await expect(page.locator("#editor-output")).toHaveText("42");
  expect(errors).toEqual([]);
});

for (const { name, url, output } of [
  {
    name: "inline Python",
    url: "http://127.0.0.1:4173",
    output: "Hello World",
  },
  {
    name: "external Python",
    url: "http://127.0.0.1:4174",
    output: "Hello from hello.py",
  },
]) {
  test(`${name} executes in the production build`, async ({ page }) => {
    const errors = captureRuntimeErrors(page);
    await page.goto(url);
    await expect(page.getByText(output, { exact: true })).toBeVisible();
    expect(errors).toEqual([]);
  });
}

test("the production build serves the Python source as a file", async ({
  request,
}) => {
  const response = await request.get("http://127.0.0.1:4174/hello.py");
  expect(response.ok()).toBe(true);
  expect(await response.text()).toContain('display("Hello from hello.py")');
  expect(response.headers()["content-type"]).not.toContain("text/html");
});
