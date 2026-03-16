import {test,expect} from '@playwright/test';

test('Valid Logins',async ({ page }) => {
        await page.goto('http://127.0.0.1:5500/html/adminLogin.html');
        await page.locator('//input[@id="username"]').fill('admin');
        await page.locator('//input[@id="password"]').fill('admin123');

        await page.evaluate(() => {
            login(); 
        }); 

        await page.waitForTimeout(2000);
        const currentUrl = page.url();
        console.log('Current URL:', currentUrl);
        expect(currentUrl).toContain('dashboard.html');

        //Rest

        await expect(page.locator('text=Welcome Admin')).toBeVisible();

    }
);