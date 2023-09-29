import { test, expect } from '@playwright/test';

test('Homepage quality checks', async ({ page }) => {
  await page.goto('https://www.morganwebdev.org/');
  await expect(page).toBeDefined();
  await expect(page).toHaveURL(/.morganwebdev.org/);
  await expect(page).toHaveTitle(/Morgan Murrah/);
  await expect(page.locator('css=.img')).toHaveCount(3);
  await expect(page.locator('css=h1')).toHaveCount(6);
  await expect(page.getByRole('heading', { name: 'Morgan Murrah' })).toBeVisible();
  await expect(page.getByTitle('Github link')).toHaveCount(2);
  await expect(page.getByTitle('RSS link')).toHaveCount(2);
});

// test('About me page loads and title', async ({ page }) => {
//   await page.goto('https://www.morganwebdev.org/');
//   // Click the get started link.
//   await page.getByRole('link', { name: 'about me' }).click();
//   // Expects page to have a heading with the name of Installation.
//   await expect(page.getByRole('heading', { name: 'About me' })).toBeVisible();
// });
