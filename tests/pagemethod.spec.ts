import {test} from '@playwright/test'
test ("Page method testing",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
// await page.locator('#name').fill("swetha") //type 1
await page.fill("#name","swetha") // type 2
// await page.locator('//button[text()="START"]').click() //type1 
await page.click('//button[text()="START"]')
await page.waitForTimeout(3000)

}) 