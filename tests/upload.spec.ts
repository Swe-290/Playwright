import {test, expect } from "@playwright/test";

test("upload file",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    await page.locator('#singleFileInput').setInputFiles("C:/Swetha/SWE 2025/Certifictae.docx")
   
//    await page.locator('#multipleFilesInput').setInputFiles(["C:/Swetha/SWE 2025/Certifictae.docx","C:/Swetha/SWE 2025/Jun2 2025.docx","C:/Swetha/SWE 2025/Swetha Resume.doc"])
   await page.locator('#singleFileInput').setInputFiles([]) 
   await page.waitForTimeout(3000)

})