import { test, expect } from '@playwright/test';

test.describe('Homepage Content', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  // Verifica se o título principal (h1) está visível na página inicial
  test('should display the main heading', async ({ page }) => {
    const heading = page.getByRole('heading', { level: 1 });
    await expect(heading).toBeVisible();
  });

  // Verifica se o link "Get Started" está visível na página inicial
  test('should have a Get Started link', async ({ page }) => {
    const getStarted = page.getByRole('link', { name: /get started/i });
    await expect(getStarted).toBeVisible();
  });

  // Verifica se existe um bloco de código com o texto "playwright" na página inicial
  test('should show Node.js installation command', async ({ page }) => {
    const codeBlock = page.locator('code').filter({ hasText: /playwright/ }).first();
    await expect(codeBlock).toBeVisible();
  });

  // Verifica se o rodapé (footer) está presente na página inicial
  test('should have footer', async ({ page }) => {
    const footer = page.locator('footer');
    await expect(footer).toBeVisible();
  });

  // Verifica se o título da aba do navegador contém a palavra "Playwright"
  test('should have page title containing Playwright', async ({ page }) => {
    await expect(page).toHaveTitle(/Playwright/);
  });
});

test.describe('Docs Page Content', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/docs/intro');
  });

  // Verifica se o título "Installation" aparece na página de introdução da documentação
  test('should have Installation heading on intro page', async ({ page }) => {
    const heading = page.getByRole('heading', { name: /installation/i });
    await expect(heading).toBeVisible();
  });

  // Verifica se o menu lateral (sidebar) de navegação está visível na página de docs
  test('should have sidebar navigation', async ({ page }) => {
    const sidebar = page.locator('.theme-doc-sidebar-container, [class*="docSidebarContainer"], nav.menu').first();
    await expect(sidebar).toBeVisible();
  });

  // Verifica se o título da aba do navegador contém "Installation" na página de intro
  test('should display intro page title', async ({ page }) => {
    await expect(page).toHaveTitle(/Installation/i);
  });
});
