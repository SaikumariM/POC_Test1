import { $, ElementFinder } from "protractor";

export class AccountSummary {
    public accountSummary: ElementFinder;
   // public userName: ElementFinder;
   // public password: ElementFinder;
   // public signInButton:ElementFinder;

    constructor() {
        this.accountSummary = $("//li[@id='account_summary_tab']");
       // this.userName = $("//input[@id='user_login']");
       // this.password = $("//input[@id='user_password']");
        //this.signInButton=$("//input[@name='submit']");
    }
}