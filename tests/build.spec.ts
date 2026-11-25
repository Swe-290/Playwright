// import {test,expect} from '@playwright/test'
// test("Build in locators",async({page})=>{
//     await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
// await expect(page.getByAltText("company-branding")).toBeVisible()
// await page.getByPlaceholder("username").fill("Admin")
// await page.getByPlaceholder("password").fill("admin123")
// // await page.getByRole("button",{type:"submit"}).click()
// await expect (page.getByText("Contact Details")).toBeVisible()
// await expect (page.getByLabel("navigation")).toBeVisible()
// await expect (page.getByTitle("OrangeHRM")).toBeVisible()

// await page.waitForTimeout(3000)
// }) 

// try
import{expect, test}from '@playwright/test'
test("try2 build in",async({page})=>{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    await expect(page.getByAltText('company-branding')).toBeVisible()
    await page.getByPlaceholder('Username').fill('Admin')
    await page.getByPlaceholder('Password').fill('admin123')
    // await page.getByRole('button',{type:"submit"}).click()
    await page.getByText('Performance').click()
    await expect (page.getByLabel('Topbar Menu')).toBeVisible()
    await expect(page.getByLabel("Sidepanel")).toBeVisible()
await expect(page.getByTitle('OrangeHRM'))
// await page.getByTestId('Employee Name')
await page.getByText('Employee Name')


    await page.waitForTimeout(3000)

})