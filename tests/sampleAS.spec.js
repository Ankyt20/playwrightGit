  import {test, expect} from '@playwright/test';
 
    test('assertions', async ({page})=>{
        await page.goto('http://127.0.0.1:5500/html/sample.html');
        await expect(page.locator('#heading')).toHaveText('Welcome to Playwright!');
        await expect(page.locator('#username')).toHaveValue('test_user');
        await expect(page.locator('#submitButton')).toBeVisible();
        // await page.waitForTimeout(2000);
        await expect(page.locator('#hiddenPara')).toBeHidden();
        await expect(page.locator('#disabledBtn')).toBeDisabled();
        await expect(page.locator('#agreeTerms')).toBeChecked();
        await page.waitForTimeout(2000);
 
    });