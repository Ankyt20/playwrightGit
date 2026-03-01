// import { test, expect } from '@playwright/test';
// import { chromium } from '@playwright/test';
const { test, expect } = require('@playwright/test');


// test.use({ headless: false });

test('XPath selectors', async ({ page }) => {
    await page.goto('http://127.0.0.1:5500/html/formLogin.html');

    await page.locator('//input[@name="email"]').fill('test@gmail.com');

    await page.locator('//input[@name="password"]').fill('123');
    await page.locator('//button[@id="login"]').click();
    // await page.waitForTimeout(2000);

    await expect(page.locator('//p[@id="message"]')).toHaveText('Login successful');

    await page.waitForTimeout(2000);

});

test('role selectors', async ({ page }) => {
    await page.goto('http://127.0.0.1:5500/html/formLogin.html');

        await page.getByLabel('Email').fill('test@gmail.com');

        await page.getByLabel('Password').fill('123');
        await page.getByRole('Button',{name:'Login'}).click();
        const msg = page.getByText('Login successful');
        await expect(msg).toBeVisible();
        // await page.waitForTimeout(1000);


        await page.getByPlaceholder('Search').fill('google');
        await page.waitForTimeout(1000);

});