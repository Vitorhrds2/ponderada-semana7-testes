import { Builder, By, until } from 'selenium-webdriver';

// Configuração do Selenium WebDriver
let driver;


beforeAll(async () => {
  driver = new Builder().forBrowser('chrome').build();
});


// Função para encerrar o WebDriver após os testes
afterAll(async () => {
  await driver.quit();
});

// Função auxiliar para esperar até que um elemento seja visível
global.waitForElement = async (locator, timeout = 10000) => {
  await driver.wait(until.elementLocated(locator), timeout);
  return driver.findElement(locator);
};
