# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: register.spec.js >> To verify the Register form with end-to-end testing >> To verify user can successfully register in the form
- Location: tests\register.spec.js:12:2

# Error details

```
Error: expect(locator).toContainText(expected) failed

Locator: locator('[class*=\'headcolor\']')
Expected substring: "Account Created Successfully"
Error: element(s) not found

Call log:
  - Expect "toContainText" with timeout 30000ms
  - waiting for locator('[class*=\'headcolor\']')

```

# Test source

```ts
  1   | import { expect } from "@playwright/test";
  2   | export class Registerr{
  3   |     constructor({page}){
  4   |         this.page = page;
  5   |         this.registerbutton = page.getByText("Register here");
  6   |         this.fName = page.getByPlaceholder("First Name");
  7   |         this.lName = page.getByPlaceholder("Last Name");
  8   |         this.email = page.getByPlaceholder("email@example.com");
  9   |         this.phnumber = page.getByPlaceholder("enter your number");
  10  |         this.occupation = page.locator("select.custom-select");
  11  |         this.password = page.locator("input[id='userPassword']");
  12  |         this.confirmpassword = page.locator("input[id='confirmPassword']");
  13  |         this.genderfemale = page.locator("input[value='Female']");
  14  |         this.gendermale = page.locator("input[value='Male']");
  15  |         this.agecheckbox = page.locator("input[type='checkbox']");
  16  |         this.submitbutton = page.locator(".btn.btn-block.login-btn");
  17  |         this.registermessage = page.locator("[class*='headcolor']");
  18  |         this.firstnameRequired = page.getByText("*First Name is required");
  19  |         this.emailRequired = page.getByText("*Email is required");
  20  |         this.phoneRequired = page.getByText("*Phone Number is required");
  21  |         this.passwordRequired = page.getByText("*Password is required");
  22  |         this.confirmPasswordRequired = page.getByText("Confirm Password is required");
  23  |         this.ageCheckboxRequired = page.getByText("*Please check above checkbox");
  24  |         this.invalidFname = page.getByText("*First Name must be 3 or more character long");
  25  |         this.invalidEmail = page.getByText("*Enter Valid Email");
  26  |         this.invalidPhone = page.getByText("*Phone Number must be 10 digit");
  27  |         this.invalidalphaPhone = page.getByText("*only numbers is allowed");
  28  |         this.invalidConfirmpassword = page.getByText("Password and Confirm Password must match with each other.");
  29  | 
  30  |     }
  31  | 
  32  |     //Open the application
  33  |     async open(){
  34  |         await this.page.goto("/client/#/auth/login/")
  35  |     }
  36  |     // Verify register form wit valid case
  37  |     async clickregister(){
  38  |         await this.registerbutton.click();
  39  |     }
  40  |    async Firstn(){
  41  |     await this.fName.fill("Aksss");     
  42  | }
  43  |    async Lastn(){
  44  |     await this.lName.fill("singh")
  45  |    }
  46  | 
  47  |    async Enteremail(){
  48  |     await this.email.fill("as1418@gmail.com");
  49  |    }
  50  |    async enterphnumber(){
  51  |     await this.phnumber.fill("7698496041");
  52  |    }
  53  |   async chooseOccupation() {
  54  |     const selectoc = ['Doctor', 'Engineer', 'Scientist', 'Student'];
  55  |     for (let i = 0; i < selectoc.length; i++) {
  56  |          await this.occupation.click();
  57  |          await this.occupation.selectOption({label:selectoc[i]});
  58  |         console.log('Selected:', selectoc[i]);
  59  |         await this.page.waitForTimeout(3000);
  60  |     }
  61  |    
  62  | }
  63  |    async choosegender(){
  64  |         await this.gendermale.click();
  65  |         await this.genderfemale.click();
  66  |    }
  67  | 
  68  |    async enterpassword(){
  69  |     await this.password.fill("As@##1411")
  70  |    }
  71  |    async enterconfirmpassword(){
  72  |     await this.confirmpassword.fill("As@##1411")
  73  |    }
  74  | 
  75  |     async selectagecheckboc(){
  76  |     await this.agecheckbox.check();
  77  |    }
  78  | 
  79  |     async submit(){
  80  |     await this.submitbutton.click();
  81  |     await this.page.waitForTimeout(2000)
  82  |    }
  83  | 
  84  |    async successMessage(){
  85  |     const accoutnCreated= this.registermessage;
> 86  |     await expect(accoutnCreated).toContainText("Account Created Successfully");    
      |                                  ^ Error: expect(locator).toContainText(expected) failed
  87  |    }
  88  | 
  89  |   // Verify with register form via clicking button without form filling 
  90  |    async clickregister(){
  91  |         await this.registerbutton.click();
  92  |     }
  93  |    async clickRegisterbutton(){
  94  |     await this.submitbutton.click();
  95  |      const invalidMessage = [
  96  |         this.firstnameRequired,
  97  |         this.emailRequired ,
  98  |         this.phoneRequired , 
  99  |         this.passwordRequired ,
  100 |         this.confirmPasswordRequired ,
  101 |         this.ageCheckboxRequired
  102 |      ]
  103 |      for(const invalid of invalidMessage){
  104 |        await expect(invalid).toBeVisible();
  105 |        console.log(invalid);
  106 |      }
  107 |   }
  108 | 
  109 |   // To verify the register form with invalid data
  110 |   async clickregister(){
  111 |         await this.registerbutton.click();
  112 |     }
  113 |   async invalidData(){
  114 |   await this.fName.fill("Ak"); 
  115 |   await this.lName.fill("singh");
  116 |   await this.email.fill("ayushtest");
  117 |   await this.phnumber.fill("WE46786");
  118 |   await this.password.fill("Ayus@##1234");
  119 |   await this.confirmpassword.fill("Ayus@##");
  120 |   await this.submitbutton.click();
  121 |   const invalidMessage =[
  122 |         this.invalidFname,
  123 |         this.invalidEmail,
  124 |         this.invalidPhone,
  125 |         this.invalidalphaPhone,
  126 |         this.invalidConfirmpassword
  127 |   ]
  128 |   for(const validation of invalidMessage){
  129 |     await expect(validation).toBeVisible();
  130 |   }
  131 |   }
  132 | }
  133 | 
  134 | 
  135 | 
  136 | 
  137 | 
```