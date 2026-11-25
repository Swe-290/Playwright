import {test,expect, chromium} from "@playwright/test";

test('windows promise',async()=>{
    const browser=await chromium.launch();
        const context =await browser.newContext()
       const page1= await context.newPage()
       const page2 =await context.newPage()
    
       await page1.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
       await expect(page1).toHaveTitle('OrangeHRM')
       const[newtab]=await Promise.all([
        context.waitForEvent('page'),
        page1.locator("//a[text()='OrangeHRM, Inc']").click()
       ])
        await page1.waitForLoadState()

})