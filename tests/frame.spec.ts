import {test,expect} from "@playwright/test";

test ("frame work",async ({page})=>{
    await page.goto('https://letcode.in/frame')
    // const frm = await page.frame({url:'https://letcode.in/frameui'})
    // await frm.getByPlaceholder('Enter name').fill('swetha')
    // const num = await page.frames()
    //     console.log(num.length);
        
       const loc = await page.frameLocator('//iframe[@name="firstFr"]')
       await loc.getByPlaceholder('Enter name').fill('swetha')
    

    await page.waitForTimeout(3000)
})