import {test,expect, Locator} from "@playwright/test";
test ("webtable",async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')
    const table:Locator=await page.locator('#productTable')

const column:Locator = await table.locator('thead tr th')
console.log(await column.count());

const rows:Locator=await table.locator('tbody tr')
console.log(await rows.count());

const fline=rows.filter({
    has:await page.locator('td'),
    hasText:('Tablet ')
})
const box=await fline.locator('input')
await box.check()
await page.waitForTimeout(3000)

})

