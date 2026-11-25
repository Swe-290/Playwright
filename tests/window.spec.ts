import {test,expect, chromium} from "@playwright/test";
test("windows handling",async()=>{
    const browser=await chromium.launch();
    const context =await browser.newContext()
   const page1= await context.newPage()
   const page2 =await context.newPage()

   await page1.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
   await expect(page1).toHaveTitle('OrangeHRM')
   await page2.goto('https://orangehrm.com/')
   await expect(page2).toHaveTitle('OrangeHRM: All in One HR Software for Businesses | OrangeHRM')

   await page1.waitForTimeout(3000)

})


