import { defineConfig } from '@playwright/test';

export default defineConfig({
  reporter: [
    ['list'], // Mostra os resultados no console em formato de lista
    ['html', { outputFolder: 'playwright-report', open: 'never' }], // Relatório HTML
    ['allure-playwright', { outputFolder: 'allure-results' }] // Relatório Allure
  ],
  use: {
    // Configurações adicionais, como capturas de tela e vídeos
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },
});