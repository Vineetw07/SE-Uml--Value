const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  // Need to log console errors
  page.on('console', msg => console.log('PAGE LOG:', msg.text()));
  page.on('pageerror', error => console.log('PAGE ERROR:', error.message));

  await page.goto('http://localhost:5173/');
  // Wait a bit
  await page.waitForTimeout(2000);
  await page.screenshot({ path: 'home.png', fullPage: true });

  await page.goto('http://localhost:5173/estimate');
  await page.waitForTimeout(2000);
  await page.screenshot({ path: 'estimator.png', fullPage: true });

  await page.goto('http://localhost:5173/about');
  await page.waitForTimeout(2000);
  await page.screenshot({ path: 'about.png', fullPage: true });

  await browser.close();
})();
