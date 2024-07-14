const puppeteer = require('puppeteer');
const url = 'https://example.com/';

(async () => {
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();

  await page.goto(url);
  await page.screenshot({ path: 'images/default.png' });

  await browser.close();
})();
