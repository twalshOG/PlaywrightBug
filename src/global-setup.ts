import {chromium, FullConfig} from '@playwright/test';

async function globalSetup(config: FullConfig) {
  console.log(JSON.stringify(config, null, 2));
  const browser = await chromium.launch({
    headless: false,
    timeout: 30000,
  });
  try
  {
    const page = await (await browser.newContext()).newPage();
    await page.goto('https://playwright.dev/docs/intro');

    const user_agent = await page.evaluate('navigator.userAgent');
    console.log('User agent GLOBAL SETUP:', user_agent);
  }
  finally{
    await browser.close();
  }

}

export default globalSetup;
