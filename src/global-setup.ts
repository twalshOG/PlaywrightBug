import {chromium, firefox, FullConfig} from '@playwright/test';

async function globalSetup(config: FullConfig) {
  console.log(JSON.stringify(config, null, 2));
  const browserChrome = await chromium.launch();
  const browserFireFox = await firefox.launch();
  try
  {
    const pageCh = await (await browserChrome.newContext()).newPage();
    await pageCh.goto('https://playwright.dev/docs/intro');
    console.log('User agent GLOBAL SETUP:', await pageCh.evaluate('navigator.userAgent'));

    const pageFF = await (await browserFireFox.newContext()).newPage();
    await pageFF.goto('https://playwright.dev/docs/intro');
    console.log('User agent GLOBAL SETUP:', await pageFF.evaluate('navigator.userAgent'));
  }
  finally{
    await browserFireFox.close();
    await browserChrome.close();
  }
}

export default globalSetup;
