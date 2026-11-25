import {test,expect} from "@playwright/test";
import project from "./assign";

test("Practice",async({page})=>{
    await page.goto("https://www.saucedemo.com/")
    const proj = new project(page);
    await proj.LogPage("standard_user","secret_sauce")
    await proj.Product()
    await proj.Cart()
    await proj.Details("swetha","raghu","600052")
    await proj.Description()
    await proj.Orders()


await page.waitForTimeout(3000)
})
