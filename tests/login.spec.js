import { test } from "@playwright/test";
import { Login } from "../page/loginpage";

test.describe(()=>{
    let loginPage;
  test.beforeEach("Login app",async({page})=>{
   loginPage = new Login({page});
   await loginPage.open();
  });

  test("Login into the application", async({context})=>{
    await loginPage.loginForm("as1411@gmail.com","As@##1411");
    // save session for other tests
    await context.storageState({ path: 'auth.json' });
    console.log('Session saved in auth.json');
  });
});