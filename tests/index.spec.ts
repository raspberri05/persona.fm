import { test, expect } from "@playwright/test";

test("index page", async ({ page }) => {
    await page.goto("/");
    await expect(page).toHaveTitle(/Persona.fm/);
});

test("footer", async ({ page }) => {
    await page.goto("/");
    const footer = page.getByRole("contentinfo").first();
    await expect(footer).toBeVisible();
});
