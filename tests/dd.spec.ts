import {test,expect, Locator} from "@playwright/test";
test("drop down",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    // await page.locator("#country").selectOption("india")
// await page.selectOption("#country","india")
// await  page.locator("#country").selectOption({label:"Australia"})\\
// await page.locator("#country").selectOption({'value':'germany'})
// await page.locator("#country").selectOption({index:3})  


const dd:Locator =await page.locator("#country")
await dd.selectOption({index:3})
await dd.textContent()
await page.waitForTimeout(3000)
})