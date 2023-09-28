import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://www.morganwebdev.org/');
  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Morgan Murrah/);
});

test('Layout and images of main page: 6 headlines, 3 images', async ({ page }) => {
  await page.goto('https://www.morganwebdev.org/');
  await expect(page.locator('css=.img')).toHaveCount(3);
  await expect(page.locator('css=h1')).toHaveCount(6);
});

test('About me page loads and title', async ({ page }) => {
  await page.goto('https://www.morganwebdev.org/');
  // Click the get started link.
  await page.getByRole('link', { name: 'about me' }).click();
  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'About me' })).toBeVisible();
});
