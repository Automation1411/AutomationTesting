import { Dashboard } from "../page/dashboardpage";
import {test} from '@playwright/test';
test.use({storageState:'auth.json'});

test.describe("dashbaord test",()=>{
    let dash;
    test.beforeEach(async({page})=>{
     dash = new Dashboard({page});
     await dash.open();
    })
 test("Test dashboard page",async()=>{
    await dash.verifyshoes();
});
})
