import { Locator,Page } from "@playwright/test";
class code{
    page:Page;
    uname:Locator;
    pword:Locator;
    lbtn:Locator;

    constructor(page:Page){
        this.page=page;
        this.uname=page.getByPlaceholder('Username');
        this.pword=page.getByPlaceholder('Password');
        this.lbtn=page.getByRole('button',{type:"submit"})

    }
    async loginpage(a:string,b:string){
        await this.uname.fill(a);
        await this.pword.fill(b);
        await this.lbtn.click()
    }
}
export default code