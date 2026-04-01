# poc_playwright

POC de automação de testes E2E com **Playwright**.

## Pré-requisitos

- Node.js 18+
- npm 9+

## Instalação

```bash
npm install
npx playwright install
```

## Scripts

| Comando | Descrição |
|---------|-----------|
| `npm run test` | Executa os testes |
| `npm run test:headed` | Executa com navegador visível |
| `npm run test:report` | Abre o relatório HTML |

## Estrutura

```
├── tests/                  # Testes
├── .github/workflows/      # CI/CD
├── playwright.config.ts   # Configuração
└── package.json
```

## CI/CD

Os testes são executados automaticamente no GitHub Actions a cada push e PR.

## Licença

MIT
