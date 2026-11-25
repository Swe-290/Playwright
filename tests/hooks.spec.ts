import {test,expect, Locator} from "@playwright/test";

test("hooks",async({page})=>{
    await page.goto('https://www.demoblaze.com/')
    await page.click('#login2')
    await page.fill('#loginusername','Swethar')
    await page.fill('#loginpassword','12661997')
    await page.click("//button[text()='Log in']")
    const image:Locator = await page.locator('.card-img-top')
    await expect(image).toHaveCount(9)
    await page.click('#logout2')

})
test("hooks2",async({page})=>{
    await page.goto('https://www.demoblaze.com/')
    await page.click('#login2')
    await page.fill('#loginusername','Swethar')
    await page.fill('#loginpassword','12661997')
    await page.click("//button[text()='Log in']")
    await page.click("//a[text()='Samsung galaxy s6']")
    await page.click("//a[text()='Add to cart']")
    page.on("dialog",async dialog=>{
        await dialog.accept()
    })
await page.click('#logout2')

})