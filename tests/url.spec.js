import { test, expect } from '@playwright/test';

// test('test', async ({ page }) => {
//   await page.goto('https://www.facebook.com/');
// //   await page.fill('','')
// });

test('test locators', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/p/download-files_25.html');
  
  await page.getByRole('textbox', { name: 'Enter Text:' }).click();
  
  
  await page.getByRole('textbox', { name: 'Enter Text:' }).fill('facebook\n');
 
  await page.getByRole('button', { name: 'Generate and Download Text' }).click();
  
  await page.locator('#Wikipedia1_wikipedia-search-input').click();
 
  await page.locator('#Wikipedia1_wikipedia-search-input').fill('booby deol');
  
  await page.locator('input[type="submit"]').click();  
  await page.waitForTimeout(4000);
  await page.locator('#field1').click();
  await page.waitForTimeout(4000); 
  await page.locator('#field2').click();  
  await page.waitForTimeout(4000); 
  await page.getByRole('button', { name: 'Point Me' }).click();
  await page.waitForTimeout(4000);
  await page.getByRole('link', { name: 'Mobiles' }).click();
  await page.waitForTimeout(4000);
  await page.getByRole('button', { name: 'START' }).click();
  await page.waitForTimeout(4000);
  await page.getByRole('button', { name: 'STOP' }).click();
  await page.waitForTimeout(4000);
});