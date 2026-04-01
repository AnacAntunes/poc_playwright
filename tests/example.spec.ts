import { test, expect } from '@playwright/test';

test.describe('Hello World', () => {
  test('should have Playwright in title', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/Playwright/);
  });
});
