const { test, expect } = require('@playwright/test')

test('API mocking and cookie handling', async ({ page }) => {
    page.route("/api/data", route => {
        route.fulfill({
            status: 200,
            contentType: 'application/json',
            body: JSON.stringify({ messge: 'Hello from real API!' }),
        });
    }); 
 
    await page.goto('http://localhost:3000/index.html');

    await page.click('#fetchBtn');

    await expect(page.locator('#message')).toHaveText("Hello from real API!"); 


});