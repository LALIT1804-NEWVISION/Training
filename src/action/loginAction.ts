import { Page } from "@playwright/test";
import { LoginPage } from "../page/loginPage";

export class LoginAction {

    readonly loginPage: LoginPage;

    constructor(page: Page) {
        this.loginPage = new LoginPage(page);
    }

    async login(Username: string, Password: string) {
        await this.loginPage.usernameInput.fill(Username);
        await this.loginPage.passwordInput.fill(Password);
        await this.loginPage.loginButton.click();
    }

    async getErrorMessage(){
        return  this.loginPage.errorMessage;
    }
}