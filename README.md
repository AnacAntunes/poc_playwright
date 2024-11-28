# poc_playwright

Este é um projeto de **POC (Proof of Concept)** para automação de testes utilizando o **Playwright**. O Playwright é uma ferramenta de automação de navegadores que facilita a execução de testes de ponta a ponta.

## Scripts Disponíveis

### Executar os Testes

Para executar os testes automatizados com Playwright, utilize o comando:

```bash
npm run test
```

### Executar os Testes com Navegador Visível

Para executar os testes com o navegador visível (útil para depuração), utilize o comando:

```bash
npm run test:headed
```

### Iniciar o Modo de Depuração

Para iniciar o modo de depuração e interagir com os testes, utilize:

```bash
npm run test:debug
```

### Abrir o Relatório HTML do Playwright

Para visualizar o relatório HTML gerado após os testes, use:

```bash
npm run test:report
```

### Gerar o Relatório Allure

Para gerar o relatório Allure a partir dos resultados de teste, execute:

```bash
npm run test:allure:generate
```

### Abrir o Relatório Allure

Após gerar o relatório Allure, você pode abri-lo com:

```bash
npm run test:allure:open
```

## Como Começar

1. **Clone o repositório**:
   ```bash
   git clone https://github.com/AnacAntunes/poc_playwright.git
   cd poc_playwright
   ```

2. **Instale as dependências**:
   ```bash
   npm install
   ```

3. **Execute os testes**:
   Depois de instalar as dependências, você pode rodar os testes com:
   ```bash
   npm run test
   ```

## Licença

Este projeto é licenciado sob a licença **MIT**


## Status
[![Playwright CI](https://github.com/AnacAntunes/poc_playwright/actions/workflows/ci.yml/badge.svg)](https://github.com/AnacAntunes/poc_playwright/actions/workflows/ci.yml)
