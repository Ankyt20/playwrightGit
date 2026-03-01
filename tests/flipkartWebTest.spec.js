import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.flipkart.com/');
  await page.getByRole('link', { name: 'Image Best Truewireless' }).click();
});

test('test1', async ({ browser }) => {
  const users = ['user1', 'user2']; 
  
  for (const user of users) {
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://www.flipkart.com/');
    await page.getByRole('link', { name: 'Image Best Truewireless' }).click();
    await context.close();
  }
});


test('googleTest', async ({page}) => {
     await page.goto('https://www.facebook.com/');
      await expect(page).toHaveTitle(/Facebook/); 
  });
