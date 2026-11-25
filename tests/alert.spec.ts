import {test,expect} from "@playwright/test";
// test("typeOfAlert",async({page})=>{
//     await page.goto("https://testautomationpractice.blogspot.com/")
//     page.on("dialog",async dialog =>{
//         expect (dialog.type()).toBe('alert')
//         expect (dialog.message()).toBe('I am an alert box!')
//         await page.waitForTimeout(3000)
//         await dialog.accept()
//     })

// await page.click('//button[@id="alertBtn"]')
// })

// test("typeOfAlert",async({page})=>{
//     await page.goto("https://testautomationpractice.blogspot.com/")
// page.on("dialog",async dialog =>{
//     expect (dialog.type()).toBe('confirm')
//     expect(dialog.message()).toBe('Press a button!')
    
//     await page.waitForTimeout(3000)
//      await dialog.accept()

// })

// await page.click('//button[@id="confirmBtn"]')
// const box=page.locator('//p[@id="demo"]')
// await expect (box).toHaveText('You pressed OK!')
// })

// test("typeOfAlert",async({page})=>{
//     await page.goto("https://testautomationpractice.blogspot.com/")
// page.on("dialog",async dialog =>{
//     expect(dialog.type()).toBe('prompt')
//     expect(dialog.message()).toBe('Please enter your name:')
//     expect(dialog.defaultValue()).toBe('Harry Potter')
    
//     await page.waitForTimeout(3000)
//     await dialog.accept('Harry Potter')
// })
// await page.click ('//button[@id="promptBtn"]')
// const prom = page.locator('//p[@id="demo"]')
// await expect (prom).toHaveText('Hello Harry Potter! How are you today?')
// })

test('Alert Test',async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    // page.on("dialog",async dialog =>{
    //     expect (dialog.type()).toBe('alert')
    //     expect (dialog.message()).toBe('I am an alert box!')
    //     await page.waitForTimeout(3000)
    //     await (dialog.accept())
    // })
    // await page.click('//button[@id="alertBtn"]')

//     page.on("dialog",async dialog=>{
//         expect (dialog.type()).toBe('confirm')
//         expect (dialog.message()).toBe('Press a button!')

//         await page.waitForTimeout(3000)
//         await dialog.accept()
//     })
// await page.click('//button[@id="confirmBtn"]')
// let box = page.locator('//p[@id="demo"]')
// expect (box).toHaveText('You pressed OK!')

page.on ("dialog",async dialog =>{
    expect (dialog.type()).toBe('prompt')
    expect(dialog.message()).toBe('Please enter your name:')
    expect(dialog.defaultValue()).toBe('Harry Potter')
    await dialog.accept('Harry Potter')
})
await page.click('//button[@id="promptBtn"]')
const box = page.locator('//p[@id="demo"]')
expect (box).toHaveText('Hello Harry Potter! How are you today?')
})

