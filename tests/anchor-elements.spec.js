const { test, expect } = require('@playwright/test');

test.describe('Anchor Elements', () => {
  test('displays top websites with working links', async ({ page }) => {
    await page.goto('/Asian_Bootcamp_2026/3.2%20Anchor%20Elements/');

    // check h1
    const h1 = page.locator('h1');
    await expect(h1).toContainText('top 5 Favourite Websites');

    // check for ordered list
    const ol = page.locator('ol');
    await expect(ol).toBeTruthy();

    // verify ol starts at 5
    const olAttr = ol.locator(':scope');
    const startAttr = await olAttr.getAttribute('start');
    expect(startAttr).toBe('5');

    // check for 5 li items
    const items = ol.locator('li');
    await expect(items).toHaveCount(5);
  });

  test('contains all required website links', async ({ page }) => {
    await page.goto('/Asian_Bootcamp_2026/3.2%20Anchor%20Elements/');

    // verify all links exist
    const links = page.locator('a');
    await expect(links).toHaveCount(5);

    // check link URLs
    await expect(links.nth(0)).toHaveAttribute('href', 'https://www.google.com');
    await expect(links.nth(1)).toHaveAttribute('href', 'https://www.github.com');
    await expect(links.nth(2)).toHaveAttribute('href', 'https://www.stackoverflow.com');
    await expect(links.nth(3)).toHaveAttribute('href', 'https://www.w3schools.com');
    await expect(links.nth(4)).toHaveAttribute('href', 'https://www.youtube.com');

    // verify link text
    await expect(links.nth(0)).toContainText('Google');
    await expect(links.nth(1)).toContainText('GitHub');
    await expect(links.nth(2)).toContainText('Stack Overflow');
    await expect(links.nth(3)).toContainText('W3Schools');
    await expect(links.nth(4)).toContainText('YouTube');
  });
});
