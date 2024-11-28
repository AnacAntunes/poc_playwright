const { Reporter } = require('@playwright/test/reporter');

class CustomReporter extends Reporter {
  onTestBegin(test) {
    console.log(`Começando o teste: ${test.title}`);
  }

  onTestEnd(test, result) {
    console.log(
      `Teste finalizado: ${test.title} | Resultado: ${result.status}`
    );
  }

  onEnd(result) {
    console.log(`Testes concluídos. Sucesso: ${result.passed}`);
  }
}

module.exports = CustomReporter;
