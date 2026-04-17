import { expect } from "@playwright/test";
export class Registerr{
    constructor({page}){
        this.page = page;
        this.registerbutton = page.getByText("Register here");
        this.fName = page.getByPlaceholder("First Name");
        this.lName = page.getByPlaceholder("Last Name");
        this.email = page.getByPlaceholder("email@example.com");
        this.phnumber = page.getByPlaceholder("enter your number");
        this.occupation = page.locator("select.custom-select");
        this.password = page.locator("input[id='userPassword']");
        this.confirmpassword = page.locator("input[id='confirmPassword']");
        this.genderfemale = page.locator("input[value='Female']");
        this.gendermale = page.locator("input[value='Male']");
        this.agecheckbox = page.locator("input[type='checkbox']");
        this.submitbutton = page.locator(".btn.btn-block.login-btn");
        this.registermessage = page.locator("[class*='headcolor']");
        this.firstnameRequired = page.getByText("*First Name is required");
        this.emailRequired = page.getByText("*Email is required");
        this.phoneRequired = page.getByText("*Phone Number is required");
        this.passwordRequired = page.getByText("*Password is required");
        this.confirmPasswordRequired = page.getByText("Confirm Password is required");
        this.ageCheckboxRequired = page.getByText("*Please check above checkbox");
        this.invalidFname = page.getByText("*First Name must be 3 or more character long");
        this.invalidEmail = page.getByText("*Enter Valid Email");
        this.invalidPhone = page.getByText("*Phone Number must be 10 digit");
        this.invalidalphaPhone = page.getByText("*only numbers is allowed");
        this.invalidConfirmpassword = page.getByText("Password and Confirm Password must match with each other.");

    }

    //Open the application
    async open(){
        await this.page.goto("/client/#/auth/login/")
    }
    // Verify register form wit valid case
    async clickregister(){
        await this.registerbutton.click();
    }
   async Firstn(){
    await this.fName.fill("Aksss");     
}
   async Lastn(){
    await this.lName.fill("singh")
   }

   async Enteremail(){
    await this.email.fill("as1412@gmail.com");
   }
   async enterphnumber(){
    await this.phnumber.fill("7698596041");
   }
  async chooseOccupation() {
    const selectoc = ['Doctor', 'Engineer', 'Scientist', 'Student'];
    for (let i = 0; i < selectoc.length; i++) {
         await this.occupation.click();
         await this.occupation.selectOption({label:selectoc[i]});
        console.log('Selected:', selectoc[i]);
        await this.page.waitForTimeout(3000);
    }
   
}
   async choosegender(){
        await this.gendermale.click();
        await this.genderfemale.click();
   }

   async enterpassword(){
    await this.password.fill("As@##1411")
   }
   async enterconfirmpassword(){
    await this.confirmpassword.fill("As@##1411")
   }

    async selectagecheckboc(){
    await this.agecheckbox.check();
   }

    async submit(){
    await this.submitbutton.click();
    await this.page.waitForTimeout(2000)
   }

   async successMessage(){
    const accoutnCreated= this.registermessage;
    await expect(accoutnCreated).toContainText("Account Created Successfully");    
   }

  // Verify with register form via clicking button without form filling 
   async clickregister(){
        await this.registerbutton.click();
    }
   async clickRegisterbutton(){
    await this.submitbutton.click();
     const invalidMessage = [
        this.firstnameRequired,
        this.emailRequired ,
        this.phoneRequired , 
        this.passwordRequired ,
        this.confirmPasswordRequired ,
        this.ageCheckboxRequired
     ]
     for(const invalid of invalidMessage){
       await expect(invalid).toBeVisible();
       console.log(invalid);
     }
  }

  // To verify the register form with invalid data
  async clickregister(){
        await this.registerbutton.click();
    }
  async invalidData(){
  await this.fName.fill("Ak"); 
  await this.lName.fill("singh");
  await this.email.fill("ayushtest");
  await this.phnumber.fill("WE46786");
  await this.password.fill("Ayus@##1234");
  await this.confirmpassword.fill("Ayus@##");
  await this.submitbutton.click();
  const invalidMessage =[
        this.invalidFname,
        this.invalidEmail,
        this.invalidPhone,
        this.invalidalphaPhone,
        this.invalidConfirmpassword
  ]
  for(const validation of invalidMessage){
    await expect(validation).toBeVisible();
  }
  }
}




