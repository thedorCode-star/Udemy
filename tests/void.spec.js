const { test, expect } = require('@playwright/test');

test.describe('Void Elements Page', () => {
  test('loads and shows expected content', async ({ page }) => {
    await page.goto('/Asian_Bootcamp_2026/2.3%20Void%20Elements/');

    // h1 title
    const h1 = page.locator('h1');
    await expect(h1).toContainText('William Blake');

    // address paragraph contains London
    const addr = page.locator('p').first();
    await expect(addr).toContainText('London');

    // there should be several <br /> elements in the address
    const brCount = await page.locator('br').count();
    expect(brCount).toBeGreaterThanOrEqual(3);

    // hr exists
    const hr = page.locator('hr');
    await expect(hr).toHaveCount(1);

    // there are multiple paragraphs of biography
    const pCount = await page.locator('p').count();
    expect(pCount).toBeGreaterThanOrEqual(2);
  });
});
