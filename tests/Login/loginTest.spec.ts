import { test, expect } from "../../src/fixture/fixture.ts";
//import {test,expect} from "@playwright/test";
//import { LoginAction } from "../../src/action/loginAction";
import loginData  from "../../src/testdata/login.json";

test.beforeEach(async({page})=>{
    await page.goto(loginData.baseUrl);
});

test('TC01 - Valid user should login successfully',async ({loginAction,page})=>{
    //const loginAction = new LoginAction(page);
    await loginAction.login(loginData.validUser.username ,loginData.validUser.password);
    await expect(page).toHaveTitle(loginData.PageTile);
    await expect(page).toHaveURL(/inventory/);
});

test('TC02 - Locked out user should not login',async ({loginAction})=>{
    //test('TC02 - Locked out user should not login',async ({loginAction,page})=>{
    //const loginAction = new LoginAction(page);
    await loginAction.login(loginData.lockedUser.username ,loginData.lockedUser.password);
    const errormsg = await loginAction.getErrorMessage();
    await expect(errormsg).toHaveText(loginData.lockedUser.errorMessage);
});

test('TC03 - problem user should not login',async ({loginAction})=>{
   // test('TC03 - problem user should not login',async ({loginAction,page})=>{
    //const loginAction = new LoginAction(page);
    await loginAction.login(loginData.invalidUser.username ,loginData.invalidUser.password);
     const errormsg = await loginAction.getErrorMessage();
    await expect(errormsg).toHaveText(loginData.invalidUser.errorMessage);
});