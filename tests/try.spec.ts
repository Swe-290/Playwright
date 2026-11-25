import {test} from '@playwright/test'
test ("try test",async({page})=>{
await page.goto("https://testautomationpractice.blogspot.com/")
await page.fill('//input[@id="phone"]','9381898987')
// await page.locator('//button[@onclick="myFunction()"]').click()
//  await page.goBack()
//  await page.goForward()
 await page.reload()
//  await page.close()
 console.log(await page.url());  
 console.log(await page.title());
 await page.locator("#sunday").check()
 await page.locator("#sunday").uncheck()
 await page.locator("#country").selectOption("india")
 
await page.waitForTimeout(4000)
}) 