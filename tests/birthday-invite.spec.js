const { test, expect } = require('@playwright/test');

test.describe('Birthday Invite Project', () => {
  test('displays birthday invitation with correct structure', async ({ page }) => {
    await page.goto('/Asian_Bootcamp_2026/3.4%20Birthday%20Invite%20Project/');

    // check main h1
    const h1 = page.locator('h1');
    await expect(h1).toContainText('Birthday Invitation');

    // check h2
    const h2 = page.locator('h2');
    await expect(h2).toContainText("You're Invited");

    // check for event details
    const pageContent = await page.locator('body').textContent();
    expect(pageContent).toContain('June 30, 2026');
    expect(pageContent).toContain('3:00 PM - 7:00 PM');
  });

  test('contains Google Maps link and image', async ({ page }) => {
    await page.goto('/Asian_Bootcamp_2026/3.4%20Birthday%20Invite%20Project/');

    // check for Google Maps link
    const mapsLink = page.locator('a', { hasText: /Google Maps/i });
    await expect(mapsLink).toBeTruthy();
    await expect(mapsLink).toHaveAttribute('href', /google\.com\/maps/);

    // check for birthday cake image
    const img = page.locator('img');
    await expect(img).toHaveAttribute('alt', 'Birthday Cake');
    await expect(img).toHaveAttribute('src', /birthday-cake/);
  });

  test('lists items to bring', async ({ page }) => {
    await page.goto('/Asian_Bootcamp_2026/3.4%20Birthday%20Invite%20Project/');

    // check for h3 "What to Bring"
    const h3 = page.locator('h3');
    await expect(h3).toContainText('What to Bring');

    // check for ul with items
    const ul = page.locator('ul');
    const items = ul.locator('li');
    await expect(items).toHaveCount(3);

    // verify specific items
    const pageContent = await page.locator('body').textContent();
    expect(pageContent).toContain('Birthday Cake');
    expect(pageContent).toContain('Party Games');
    expect(pageContent).toContain('Decorations');
  });
});
