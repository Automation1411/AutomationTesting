import{expect} from '@playwright/test'

export class Dashboard {
    constructor({page}){
        this.page = page;
        this.shoes= page.getByText("ADIDAS ORIGINAL");
    }

    async open(){
        await this.page.goto("client/#/dashboard/dash");
    }

    async verifyshoes(){
        await expect(this.shoes).toBeVisible();
    }
}