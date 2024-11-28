import { test, expect } from '@playwright/test';

test('Hello World Test', async ({ page }) => {
    // Abre a página do Playwright
    await page.goto('https://playwright.dev');

    // Verifica se o título contém "Playwright"
    const title = await page.title();
    console.log(`O título da página é: ${title}`);
    expect(title).toContain('Playwright');
});
