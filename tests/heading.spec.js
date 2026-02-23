const { test, expect } = require('@playwright/test');

test.describe('Heading Element Tests', () => {
  test('should display correct heading hierarchy', async ({ page }) => {
    await page.goto('/Asian_Bootcamp_2026/2.1%20Heading%20Element/');
    
    const h1 = await page.locator('h1');
    await expect(h1).toContainText('Book');
  });

  test('should have chapter headings', async ({ page }) => {
    await page.goto('/Asian_Bootcamp_2026/2.1%20Heading%20Element/');
    
    const h2s = await page.locator('h2').count();
    expect(h2s).toBe(3); // Chapter 1, 2, 3
  });

  test('should have section headings', async ({ page }) => {
    await page.goto('/Asian_Bootcamp_2026/2.1%20Heading%20Element/');
    
    const h3s = await page.locator('h3').count();
    expect(h3s).toBe(5); // Section 1, 2 for each chapter
  });

  test('should have nested h4 diagram', async ({ page }) => {
    await page.goto('/Asian_Bootcamp_2026/2.1%20Heading%20Element/');
    
    const h4s = await page.locator('h4').count();
    expect(h4s).toBeGreaterThanOrEqual(1);
  });
});
