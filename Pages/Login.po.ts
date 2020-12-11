import { $, ElementFinder } from "protractor";

export class Login {
    public signInHome: ElementFinder;
    public userName: ElementFinder;
    public password: ElementFinder;
    public signInButton:ElementFinder;

    constructor() {
        this.signInHome = $("//button[@id='signin_button']");
        this.userName = $("//input[@id='user_login']");
        this.password = $("//input[@id='user_password']");
        this.signInButton=$("//input[@name='submit']");
    }
}