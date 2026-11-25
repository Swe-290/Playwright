// import {test} from '@playwright/test'
// test ("Orange Page testing",async ({page})=>{
//     await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
// await page.locator('//input[@name="username"]').fill("Admin")
// await page.locator('//input[@type="password"]').fill("admin123")
// await page.click('//button[@type="submit"]')
// //   await page.goBack()
// //   await page.goForward()
//  await page.reload()
// //  await page.close()
// console.log(await page.url());
//  console.log(await page.title());

//  await page.waitForTimeout(3000)
// })

import {test} from '@playwright/test'
test ("Try1",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/") 
    await page.locator("#name").fill("Swetha")
    await page.locator('//button[@onclick="toggleButton(this)"]').click()
    await page.goBack()
    await page.goForward()
    await page.reload()
// await page.close()
console.log(await page.url());
console.log(await page.title());
await page.check('#sunday')
await page.uncheck('#sunday')
await page.locator('#country').selectOption('india')


await page.waitForTimeout(3000)
})