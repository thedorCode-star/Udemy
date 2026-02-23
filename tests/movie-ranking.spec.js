const { test, expect } = require('@playwright/test');

test.describe('Movie Ranking Project', () => {
  test('displays movie ranking page with correct structure', async ({ page }) => {
    await page.goto('/Asian_Bootcamp_2026/2.4%20Movie%20Ranking%20Project/');

    // h1 title
    const h1 = page.locator('h1');
    await expect(h1).toContainText('Top Movies of All Time');

    // h2 subtitle
    const h2 = page.locator('h2');
    await expect(h2).toContainText('My best 3 movies');

    // hr separator exists
    const hr = page.locator('hr');
    await expect(hr).toHaveCount(1);

    // check for 3 h3 movie titles
    const h3s = page.locator('h3');
    await expect(h3s).toHaveCount(3);

    // verify specific movies are listed
    await expect(h3s.nth(0)).toContainText('Sprited Away');
    await expect(h3s.nth(1)).toContainText('Ex Machina');
    await expect(h3s.nth(2)).toContainText('Drive');

    // verify descriptions exist
    const descriptions = page.locator('p');
    await expect(descriptions).toHaveCount(3);
  });

  test('contains movie descriptions', async ({ page }) => {
    await page.goto('/Asian_Bootcamp_2026/2.4%20Movie%20Ranking%20Project/');

    const pageContent = await page.locator('body').textContent();
    expect(pageContent).toContain('anime');
    expect(pageContent).toContain('artificial intelligence');
    expect(pageContent).toContain('stunt driver');
  });
});
