import { test,expect, Locator } from "@playwright/test";
test("Assertion",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    await expect(page).toHaveURL("https://testautomationpractice.blogspot.com/")
    console.log(await page.title());
    await expect(page).toHaveTitle("Automation Testing Practice")
    // await expect(page.getByText("Data Entry Form")).toBeVisible()type 1
    const tit:Locator = await page.getByText("Data Entry Form")
    await expect(tit).toBeVisible()
    await expect(page.locator('//button[text()="START"')).toBeEnabled
    const box:Locator = await page.locator('#sunday')
    await box.check()
    await expect(box).toBeChecked

    const val1:Locator = await page.locator("#name")
    await val1.fill("Swetha")
    // await expect(page.locator("#name")).toHaveValue("Swetha")
    await expect(val1).toHaveValue("Swetha")

    const tex :Locator=await page.locator('(//label[@for="textbox"])[2]')
    await expect(tex).toHaveText('Email:')
    await expect(tex).toContainText('Ema')

    const countrys = await page.locator('#country option')
    await expect(countrys).toHaveCount(10)

    // await page.goto("https://www.instagram.com/?hl=en")
    //  await expect(page.locator('(//div[@role="none"])[1]')).toBeDisabled()
    
    
})



