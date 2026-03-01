const {chromium} = require('playwright');
(async()=>{ 
    const browser = await chromium.launch({headless:false, slowMo:1000});
    const context = await browser.newContext();
    const user1page=await context.newPage();
    const user2page=await context.newPage();
    await user1page.goto('https://www.google.com/');
    await user2page.goto('https://www.bing.com/');
    await browser.close();
})(); 

