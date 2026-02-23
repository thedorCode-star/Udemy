const { test, expect } = require('@playwright/test');

test.describe('Nesting and Indentation', () => {
  test('displays nested lists with correct hierarchy', async ({ page }) => {
    await page.goto('/Asian_Bootcamp_2026/3.1%20Nesting%20and%20Indentation/');

    // check for main ul
    const mainUl = page.locator('ul').first();
    await expect(mainUl).toBeTruthy();

    // check for first level li items
    const topLevelItems = mainUl.locator('> li');
    await expect(topLevelItems).toHaveCount(3); // A, B, C

    // check text content
    const pageContent = await page.locator('body').textContent();
    expect(pageContent).toContain('A.');
    expect(pageContent).toContain('B.');
    expect(pageContent).toContain('C.');
  });

  test('contains nested ordered and unordered lists', async ({ page }) => {
    await page.goto('/Asian_Bootcamp_2026/3.1%20Nesting%20and%20Indentation/');

    // check for ol (ordered lists)
    const orderedLists = page.locator('ol');
    expect(await orderedLists.count()).toBeGreaterThanOrEqual(1);

    // check for nested ul
    const unorderedLists = page.locator('ul');
    expect(await unorderedLists.count()).toBeGreaterThanOrEqual(2);

    // verify deeply nested content exists
    const pageContent = await page.locator('body').textContent();
    expect(pageContent).toContain('B2aa');
    expect(pageContent).toContain('B3b');
  });
});
