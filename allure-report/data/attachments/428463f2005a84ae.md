# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: register.spec.js >> To verify the Register form with end-to-end testing >> @smoke To verify user can successfully register in the form
- Location: tests\register.spec.js:12:2

# Error details

```
Error: expect(locator).toContainText(expected) failed

Locator: locator('[class*=\'headcolor\']')
Expected substring: "Account Created Successfully"
Timeout: 30000ms
Error: element(s) not found

Call log:
  - Expect "toContainText" with timeout 30000ms
  - waiting for locator('[class*=\'headcolor\']')

```

# Page snapshot

```yaml
- generic [ref=e3]:
  - banner [ref=e4]:
    - generic [ref=e5]:
      - generic [ref=e7]: Ecom
      - generic [ref=e9]:
        - link " dummywebsite@rahulshettyacademy.com" [ref=e11] [cursor=pointer]:
          - /url: emailto:dummywebsite@rahulshettyacademy.com
          - generic [ref=e12]: 
          - text: dummywebsite@rahulshettyacademy.com
        - generic [ref=e13]:
          - link "" [ref=e14] [cursor=pointer]:
            - /url: "#"
            - generic [ref=e15]: 
          - link "" [ref=e16] [cursor=pointer]:
            - /url: "#"
            - generic [ref=e17]: 
          - link "" [ref=e18] [cursor=pointer]:
            - /url: "#"
            - generic [ref=e19]: 
          - link "" [ref=e20] [cursor=pointer]:
            - /url: "#"
            - generic [ref=e21]: 
  - generic [ref=e22]:
    - generic [ref=e23]:
      - heading "We Make Your Shopping Simple" [level=3]
      - heading "Practice Website for Rahul Shetty Academy Students" [level=1] [ref=e24]:
        - text: Practice Website for
        - emphasis [ref=e25]: Rahul Shetty Academy
        - text: Students
      - link "Register" [ref=e26] [cursor=pointer]:
        - /url: "#/auth/register"
    - generic [ref=e29]:
      - heading "Register" [level=1] [ref=e30]
      - generic [ref=e31]:
        - generic [ref=e32]:
          - generic [ref=e34]:
            - generic [ref=e35]: First Name
            - textbox "First Name" [ref=e36]: Akss
          - generic [ref=e38]:
            - generic [ref=e39]: Last Name
            - textbox "Last Name" [ref=e40]: singh
        - generic [ref=e41]:
          - generic [ref=e42]:
            - generic [ref=e43]: Email
            - textbox "email@example.com" [ref=e44]: as1413@gmail.com
          - generic [ref=e45]:
            - generic [ref=e46]: Phone Number
            - textbox "enter your number" [ref=e47]: "7698596052"
        - generic [ref=e48]:
          - generic [ref=e49]:
            - generic [ref=e50]: Occupation
            - combobox [ref=e51]:
              - option "Choose your occupation" [disabled]
              - option "Doctor"
              - option "Student" [selected]
              - option "Engineer"
              - option "Scientist"
          - generic [ref=e52]:
            - generic [ref=e53]: Gender
            - generic [ref=e54]:
              - radio "Male" [ref=e55]
              - text: Male
            - generic [ref=e56]:
              - radio "Female" [checked] [ref=e57]
              - text: Female
        - generic [ref=e58]:
          - generic [ref=e59]:
            - generic [ref=e60]: Password
            - textbox "Passsword" [ref=e61]: As@##1411
          - generic [ref=e62]:
            - generic [ref=e63]: Confirm Password
            - textbox "Confirm Password" [ref=e64]:
              - /placeholder: Confirm Passsword
              - text: As@##1411
        - generic [ref=e65]:
          - checkbox [checked] [ref=e67]
          - generic [ref=e68]: I am 18 year or Older
        - button "Register" [active] [ref=e69] [cursor=pointer]
      - paragraph [ref=e70] [cursor=pointer]: Already have an account? Login here
  - generic [ref=e71]:
    - heading "Why People Choose Us?" [level=1] [ref=e74]
    - generic [ref=e75]:
      - generic [ref=e76]:
        - generic [ref=e78]: 
        - generic [ref=e79]:
          - heading "3546540" [level=1]
          - paragraph [ref=e80]: Successfull Orders
      - generic [ref=e81]:
        - generic [ref=e83]: 
        - generic [ref=e84]:
          - heading "37653" [level=1]
          - paragraph [ref=e85]: Customers
      - generic [ref=e86]:
        - generic [ref=e88]: 
        - generic [ref=e89]:
          - heading "3243" [level=1]
          - paragraph [ref=e90]: Sellers
    - generic [ref=e91]:
      - generic [ref=e92]:
        - generic [ref=e94]: 
        - generic [ref=e95]:
          - heading "4500+" [level=1]
          - paragraph [ref=e96]: Daily Orders
      - generic [ref=e97]:
        - generic [ref=e99]: 
        - generic [ref=e100]:
          - heading "500+" [level=1]
          - paragraph [ref=e101]: Daily New Customer Joining
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
  41  |     await this.fName.fill("Akss");     
  42  | }
  43  |    async Lastn(){
  44  |     await this.lName.fill("singh")
  45  |    }
  46  | 
  47  |    async Enteremail(){
  48  |     await this.email.fill("as1413@gmail.com");
  49  |    }
  50  |    async enterphnumber(){
  51  |     await this.phnumber.fill("7698596052");
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