import { $, ElementFinder } from "protractor";

export class Logout {
    public userNameProfile: ElementFinder;
    public logout: ElementFinder;
    public homeMenu: ElementFinder;
   // public signInButton:ElementFinder;

    constructor() {
        this.userNameProfile = $("#settingsBox > ul > li:nth-child(3) > a");
        this.logout = $("//a[@id='logout_link']");
        this.homeMenu=$("//li[@id='homeMenu']");

        
        
    }
}


