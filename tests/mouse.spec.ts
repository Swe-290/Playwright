import {test,expect} from "@playwright/test";

test("mouse hover",async ({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')
    // await page.locator('//button[text()="Point Me"]').hover()
    // await page.waitForTimeout(3000)


// const drag =await page.locator('div#draggable')
// const drop =await page.locator('div#droppable')
// await drag.dragTo(drop)
// await page.waitForTimeout(3000)

// await page.locator('//button[text()="Copy Text"]').dblclick
// await page.click('//button[text()="Copy Text"]',{clickCount:2})
// await page.waitForTimeout(3000)

// await page.click('#Wikipedia1_wikipedia-search-input',{button:'right'})
// await page.click('#Wikipedia1_wikipedia-search-input',{button:'left'})

await page.mouse.wheel (0,500);
await page.mouse.wheel (0,-1500)
await page.waitForTimeout(3000)
})