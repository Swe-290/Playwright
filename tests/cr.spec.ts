import { test,expect, Locator } from "@playwright/test";
// test('Radio button',async({page})=>{
//     await page.goto("https://testautomationpractice.blogspot.com/")
//     await page.locator('#male').check()
// })

test('Check box',async({page})=>{

     await page.goto("https://testautomationpractice.blogspot.com/")
    const bo:string[] = ['#sunday','#monday','#tuesday','#wednesday','#thursday','#friday','#saturday']
   for(let re of bo){
    const boxs =  page.locator(re)
    await boxs.check()
   }
})
// //     // await expect(box).toBeChecked



    // await page.goto("https://testautomationpractice.blogspot.com/")
    // const box=['#sunday','#monday','#tuesday','#wednesday','#thursday','#friday','#saturday']
    
//    for(let re=0;re<box.length;re++){
//     const box1=page.locator(box[re])
//      console.log (await box1.check())
//     console.log(await box1.uncheck)}

//    for(let val1 of box){
//     const box1=page.locator(val1)
//     console.log(await box1.check());
//     console.log(await box1.uncheck);
    