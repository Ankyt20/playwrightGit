import { test, expect, chromium } from '@playwright/test';

let browser;
let page;
let context;

test.beforeAll(async () => {
    console.log("Launch browser");
    browser = await chromium.launch(); 
    context = await browser.newContext();
    page = await context.newPage();
    await page.goto('http://127.0.0.1:5500/html/hooks.html');
});

test.afterAll(async () => {
    console.log('Closing the browser');
    await browser.close();
})

test('Check heading text', async () => {
    const title = page.locator('#title');
    await expect(title).toHaveText('Welcome to PW');
});

test('Check input values', async () => {
    const title = page.locator('#nameInput');
    await expect(title).toHaveValue('Welcome to PW');
});