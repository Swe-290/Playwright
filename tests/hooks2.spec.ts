import {test,expect,Locator} from "@playwright/test";
let page:any;
test.beforeEach('before hooks',async({browser})=>{
    page=await browser.newPage()
    await page.goto('https://www.demoblaze.com/')
    await page.click('#login2')
    await page.fill('#loginusername','Swethar')
    await page.fill('#loginpassword','12661997')
    await page.click("//button[text()='Log in']")
})
test.afterEach('after hook',async()=>{
    await page.click('#logout2')
})
test("task one",async()=>{
    const image:Locator = await page.locator('.card-img-top')
        await expect(image).toHaveCount(9)
})
test("task two",async()=>{
    await page.click("//a[text()='Samsung galaxy s6']")
    await page.click("//a[text()='Add to cart']")
    page.on("dialog",async dialog=>{
        await dialog.accept()
})
})