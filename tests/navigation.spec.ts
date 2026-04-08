import { test, expect } from '@playwright/test';

test.describe('Navigation', () => {
  // Verifica se a página inicial carrega corretamente e a URL contém "playwright.dev"
  test('should load the homepage', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveURL(/playwright\.dev/);
  });

  // Verifica se o cabeçalho (header) está visível na página inicial
  test('should have a visible header', async ({ page }) => {
    await page.goto('/');
    const header = page.locator('header');
    await expect(header).toBeVisible();
  });

  // Verifica se ao clicar no link "Docs" a URL muda para a seção de documentação
  test('should navigate to Docs page', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('link', { name: 'Docs' }).first().click();
    await expect(page).toHaveURL(/docs/);
  });

  // Verifica se ao clicar no link "API" a URL muda para a seção de API
  test('should navigate to API page', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('link', { name: 'API' }).first().click();
    await expect(page).toHaveURL(/api/);
  });

  // Verifica se o botão de voltar do navegador retorna corretamente para a página inicial
  test('should have working back navigation', async ({ page }) => {
    await page.goto('/');
    const homeURL = page.url();
    await page.getByRole('link', { name: 'Docs' }).first().click();
    await page.goBack();
    await expect(page).toHaveURL(homeURL);
  });
});
