import { expect, test } from "@playwright/test";

test("setup, API links, and search work under the Pages base path", async ({
  page,
}) => {
  const errors: string[] = [];
  page.on("pageerror", (error) => errors.push(error.message));
  page.on("response", (response) => {
    if (response.status() >= 400) errors.push(response.url());
  });

  await page.goto("./");
  await expect(
    page.getByRole("heading", { name: "Get started", level: 1 }),
  ).toBeVisible();
  await page
    .locator(".VPSidebar")
    .getByRole("link", { name: "API reference", exact: true })
    .click();
  await expect(
    page.getByRole("heading", { name: "PyScriptProvider", level: 2 }),
  ).toBeVisible();
  await page.reload();
  await expect(
    page.getByRole("heading", { name: "API reference", level: 1 }),
  ).toBeVisible();

  await page.getByRole("button", { name: "Search", exact: true }).click();
  await page.getByRole("searchbox").fill("PyEditor");
  await expect(
    page.locator(".VPLocalSearchBox").getByRole("link").first(),
  ).toBeVisible();
  await page.keyboard.press("Escape");

  for (const [path, title] of [
    ["guide", "Examples"],
    ["migration", "Migration"],
  ]) {
    await page.goto(path);
    await expect(
      page.getByRole("heading", { name: title, level: 1 }),
    ).toBeVisible();
  }
  expect(errors).toEqual([]);
});

test("mobile menu opens and navigates to the API", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("./");
  await page.getByRole("button", { name: "Menu", exact: true }).click();
  await page
    .locator(".VPSidebar")
    .getByRole("link", { name: "API reference", exact: true })
    .click();
  await expect(
    page.getByRole("heading", { name: "API reference", level: 1 }),
  ).toBeVisible();
  expect(
    await page.evaluate(
      () => document.documentElement.scrollWidth <= window.innerWidth,
    ),
  ).toBe(true);
});
