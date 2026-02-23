const { test, expect } = require('@playwright/test');

test.describe('Paragraph Element Tests', () => {
  test('should load paragraph page', async ({ page }) => {
    await page.goto('/Asian_Bootcamp_2026/2.2%20Paragraph%20Element/');
    
    const h1 = await page.locator('h1');
    await expect(h1).toContainText('My Fiction Book');
  });

  test('should display multiple paragraphs', async ({ page }) => {
    await page.goto('/Asian_Bootcamp_2026/2.2%20Paragraph%20Element/');
    
    const paragraphs = await page.locator('p').count();
    expect(paragraphs).toBeGreaterThanOrEqual(3);
  });

  test('should contain Lorem ipsum text', async ({ page }) => {
    await page.goto('/Asian_Bootcamp_2026/2.2%20Paragraph%20Element/');
    
    const page_content = await page.locator('body').textContent();
    expect(page_content).toContain('Lorem ipsum');
  });
});
