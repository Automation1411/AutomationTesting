import { expect } from "@playwright/test";

export class Login{
    constructor({page}){
        this.page = page;
        this.email = page.locator("#userEmail");
        this.password = page.locator("#userPassword");
        this.loginbutton = page.locator("[id='login']");
        this.home = page.locator(".fa.fa-home");
    }
    async open(){
        await this.page.goto("/client/#/auth/login/")
    }
    async loginForm(email,password){
        await this.email.fill(email);
        await this.password.fill(password);
        await this.loginbutton.click();
        await expect(this.home).toBeVisible();
    
    }
}