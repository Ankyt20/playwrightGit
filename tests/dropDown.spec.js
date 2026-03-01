import { test,expect } from '@playwright/test';

test('dropdown', async ({ page }) => {
    await page.goto('http://127.0.0.1:5500/html/dropDown.html');
    // await page.selectOption('#color','Blue');
    await page.selectOption('#color',{index:1});
   // await page.waitForTimeout(2000);
    //const selectOption = await page.selectOption('#color') ;
    //console.log(selectOption);
    //await expect(selectOption).toBe('Blue');
    //await page.waitForTimeout(2000);
    let selected = await page.$eval('#color',el => el.value);
    console.log(selected);
    await expect(selected).toBe('blue');
    // await page.locator('#title');
    // let selectedH1 = ('#title',el=> el.value);
    // console.log(selectedH1);

});
