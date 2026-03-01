
import { test, expect, chromium } from '@playwright/test';

test('Interact with iFrame content', async ({ page }) => {
    await page.goto('');
    await page.waitFortTimeout(2000);

    const frame = await page.frame({ name: 'testFrame' });
    await expect(frame.locator('text=Inside the iframe')).toBeVisible();

    await page.waitFortTimeout(2000);

    await frame.click('#clickMe');
    await page.waitForTimeout(2000);

    const message = frame.locator('#message');
    await expect(message).toBeVisible();
    await expect(message).toHaveText("You clicked the button!");

});