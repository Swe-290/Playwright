import { Keyboard, Locator,Page,ScreenshotMode,expect } from "@playwright/test"
class project{
    page:Page;
    usname:Locator;
    passwrd:Locator;
    Log:Locator;
    cart1:Locator;
    cart2:Locator;
    cart:Locator;  
    remove:Locator;
    checkout:Locator;
    name:Locator;
    lstname:Keyboard;
    Zip:Keyboard;
    cntnue:Locator;
    Descp:Locator;
    finish:Locator;
    order:Locator;


    constructor(page:Page){
        this.page=page;
        this.usname=page.getByPlaceholder("Username")
        this.passwrd=page.getByPlaceholder("Password")
        this.Log=page.getByRole("button",{type:"submit"})
        this.cart1=page.locator('//button[@data-test="add-to-cart-sauce-labs-onesie"]')
        this.cart2=page.locator('//button[@name="add-to-cart-test.allthethings()-t-shirt-(red)"]')
        this.cart=page.locator('.shopping_cart_link')
        this.remove=page.locator('#remove-sauce-labs-onesie')
        this.checkout=page.locator('#checkout')
        this.name=page.getByPlaceholder("First Name")
        this.lstname=page.keyboard
        this.Zip=page.keyboard
        this.cntnue=page.locator("#continue")
        this.Descp=page.locator(".summary_total_label")
        this.finish=page.locator("#finish")
        this.order=page.locator(".checkout_complete_container")

    }
async LogPage(a:string,b:string){
    await this.usname.fill(a)
    await this.passwrd.fill(b)
    await this.Log.click()
    
}
async Product(){
    await this.cart1.click()
    await this.cart2.click()
    await this.cart.click()

}
async Cart(){
    await this.remove.click()
    await this.checkout.click()
}
async Details(a:string,b:string,c:string){
    await this.name.fill(a)
    await this.page.keyboard.down("Tab")
    await this.lstname.insertText(b);
    await this.page.keyboard.down("Tab")
    await this.Zip.insertText(c);
    await this.cntnue.click()
}
async Description(){
    await expect (this.Descp).toHaveText("Total: $17.27")
    await this.finish.click()
}
async Orders(){
    await this.page.screenshot({path:'C:/Users/Swetha/VS CODE/Playwright/tests/assi.png',fullPage:true})
}
}

export default project