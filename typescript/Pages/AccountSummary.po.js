"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountSummary = void 0;
const protractor_1 = require("protractor");
class AccountSummary {
    // public userName: ElementFinder;
    // public password: ElementFinder;
    // public signInButton:ElementFinder;
    constructor() {
        this.accountSummary = protractor_1.$("//li[@id='account_summary_tab']");
        // this.userName = $("//input[@id='user_login']");
        // this.password = $("//input[@id='user_password']");
        //this.signInButton=$("//input[@name='submit']");
    }
}
exports.AccountSummary = AccountSummary;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWNjb3VudFN1bW1hcnkucG8uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9QYWdlcy9BY2NvdW50U3VtbWFyeS5wby50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSwyQ0FBOEM7QUFFOUMsTUFBYSxjQUFjO0lBRXhCLGtDQUFrQztJQUNsQyxrQ0FBa0M7SUFDbEMscUNBQXFDO0lBRXBDO1FBQ0ksSUFBSSxDQUFDLGNBQWMsR0FBRyxjQUFDLENBQUMsaUNBQWlDLENBQUMsQ0FBQztRQUM1RCxrREFBa0Q7UUFDbEQscURBQXFEO1FBQ3BELGlEQUFpRDtJQUNyRCxDQUFDO0NBQ0o7QUFaRCx3Q0FZQyJ9