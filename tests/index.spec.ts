import { test, expect } from "@playwright/test";

test("index page", async ({ page }) => {
    await page.goto("/");
    await expect(page).toHaveTitle(/Persona FM/);
    const h1 = page.getByRole("heading").first();
    const p1 = page.getByRole("paragraph").first();
    const p2 = page.getByRole("paragraph").nth(1);
    const a1 = page.getByRole("link").nth(2);
    await expect(h1).toBeVisible();
    await expect(h1).toContainText("Welcome to Persona.fm!");
    await expect(p1).toBeVisible();
    await expect(p1).toContainText("Your AI-Generated Last.fm music persona");
    await expect(a1).toBeVisible();
    await expect(a1).toContainText(/Log In|home/);
    await expect(p2).toBeVisible();
    await expect(p2).toContainText(/to get started|Go to/);
});

test("footer", async ({ page }) => {
    await page.goto("/");
    const footer = page.getByRole("contentinfo").first();
    await expect(footer).toBeVisible();
});
