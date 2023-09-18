import puppeteer, { Browser, Page } from 'puppeteer';

let browser: Browser;
let page: Page;

beforeAll(async () => {
  browser = await puppeteer.launch();
  page = await browser.newPage();
});

afterAll(async () => {
  await browser.close();
});

test('Verificar título da página de exemplo', async () => {
  await page.goto('http://localhost');
  const pageTitle = await page.title();
  expect(pageTitle).toBe('Nexus');
});

test('Verificar conteúdo de um elemento específico', async () => {
  await page.goto('http://localhost');
  const elementText = await page.$eval('#meu-elemento', (el) => el.textContent);
  expect(elementText).toContain('Texto esperado');
});
