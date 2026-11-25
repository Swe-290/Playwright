import {test,expect} from "@playwright/test";

test ("home page",async ({page})=>{
    await page.goto ('https://www.amazon.in/')
    await page.waitForTimeout(3000)
    // await page.screenshot({path:'C:/Users/Swetha/VS CODE/Playwright/tests/screenshot'+Date.now()+'home.png'})
// await page.screenshot({path:'C:/Users/Swetha/VS CODE/Playwright/tests/screenshot'+'full.png',fullPage:true})
await page.locator('(//img[@alt="amazon business"])[1]').screenshot({path:'C:/Users/Swetha/VS CODE/Playwright/tests/screenshot'+'screen.png'})

})