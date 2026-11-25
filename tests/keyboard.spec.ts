import {test,expect} from "@playwright/test";

test ("keyboard action",async({page})=>{
    await page.goto ('https://testautomationpractice.blogspot.com/')
    await page.fill('#name','swetha9757@gmai')
    await page.keyboard.press('Control+A')
    await page.keyboard.press('Control+X')
    await page.keyboard.down("Tab")
    await page.keyboard.press("Control+V")
    await page.keyboard.down('Tab')
    await page.keyboard.insertText('9381898987')
await page.keyboard.press('Shift+Tab')
await page.keyboard.press('Shift+Tab')
await page.keyboard.insertText('Swetha')



    await page.waitForTimeout(3000)
})