import { test, expect } from '@playwright/test';
import { chromium } from '@playwright/test';

test('Browser', async ({ page }) => {
    const browser = await chromium.launch({ headless: false });

    // First user context 
    const context1 = await browser.newContext();
    const page1 = await context1.newPage();
    await page1.goto('http://127.0.0.1:5500/html/login.html');
    await page1.fill('#username', 'Ankit');
    await expect(page1.locator('#username')).toHaveValue('Ankit');

    // Second user context 
    const context2 = await browser.newContext();
    const page2 = await context2.newPage();
    await page2.goto('http://127.0.0.1:5500/html/login.html');
    await page2.fill('#username', 'Kumar');
    await expect(page2.locator('#username')).toHaveValue('Kumar');

    await browser.close();
});
