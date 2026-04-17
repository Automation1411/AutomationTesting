
import{test} from '@playwright/test';
import { Registerr } from '../page/registerpage';

test.describe.serial("To verify the Register form with end-to-end testing", 
    ()=>{
let createCustomer;
 test.beforeEach(async({page})=>{
  createCustomer = new Registerr({page});
  await createCustomer.open();
 });
 test("To verify user can successfully register in the form",async({})=>{
    await createCustomer.clickregister();
    await createCustomer.Firstn();
    await createCustomer.Lastn();
    await createCustomer.Enteremail();
    await createCustomer.enterphnumber();
    await createCustomer.chooseOccupation();
    await createCustomer.choosegender();
    await createCustomer.enterpassword();
    await createCustomer.enterconfirmpassword();
    await createCustomer.selectagecheckboc();
    await createCustomer.submit();
    await createCustomer.successMessage();
 });
 test("To verify if the user click the register button without filling out the form.",async({})=>{
    await createCustomer.clickregister();
    await createCustomer.clickRegisterbutton();
 });
 test("To verify the register form with invalid data",async({page})=>{
      await createCustomer.clickregister();
      await createCustomer.invalidData();
 });

});