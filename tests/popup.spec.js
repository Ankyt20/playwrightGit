import { test, expect } from '@playwright/test';

test('popup', async ({ page }) => {
    await page.goto('http://127.0.0.1:5500/html/popup.html'); 
    const [popup] = await Promise.all([
        page.context().waitForEvent('page'),
        page.click('text=Open Popup'),
    ]);
 
    await popup.waitForLoadState();
    await expect(popup.locator('text=This is the popup window')).toBeVisible();
    await popup.click('#confirmBtn');
    const message = popup.locator('#message');
    await expect(message).toBeVisible();
    await expect(message).toHaveText('You clicked the button');

});