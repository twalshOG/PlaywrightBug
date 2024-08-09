import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);

  const user_agent = await page.evaluate('navigator.userAgent');
  console.log('User agent IN TEST:', user_agent);
});
