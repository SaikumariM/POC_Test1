"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const AccountSummary_po_1 = require("../Pages/AccountSummary.po");
const Login_po_1 = require("../Pages/Login.po");
const { Given, When, Then, And } = require("cucumber");
const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;
const login = new Login_po_1.Login();
const accountSummary = new AccountSummary_po_1.AccountSummary();
Given(/^User giving "(.*)" of the Zero Bank$/, (URL) => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.get(URL);
    yield protractor_1.browser.sleep(20000);
    yield expect(protractor_1.browser.getCurrentUrl()).to.equal("http://zero.webappsecurity.com/");
}));
Then(/^User validates Title of the application as Zero Bank$/, () => __awaiter(void 0, void 0, void 0, function* () {
    yield expect(protractor_1.browser.getTitle()).to.eventually.equal("Zero Bank");
}));
//Feature Login
Given(/^User navigates to the website Zero Bank$/, () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.sleep(20000);
    yield login.signInHome.click();
}));
When(/^there user clicks Signin Button$/, () => __awaiter(void 0, void 0, void 0, function* () {
    yield login.signInHome.click();
}));
When(/^there user logs in through Signin Window by using Username as "(.*)" and Password as "(.*)"$/, (username, password) => __awaiter(void 0, void 0, void 0, function* () {
    yield login.userName.sendKeys(username);
    yield login.password.sendKeys(password);
}));
When(/^User clciks on SignIn Button$/, () => __awaiter(void 0, void 0, void 0, function* () {
    yield login.signInButton.click();
}));
Then(/^Validate User SignIn the Zero Bank application successfully.$/, () => __awaiter(void 0, void 0, void 0, function* () {
    yield expect(accountSummary.accountSummary.isPresent());
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW5QYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vU3RlcF9EZWZpbml0aW9ucy9sb2dpblBhZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFDQSwyQ0FBcUM7QUFDckMsa0VBQTREO0FBQzVELGdEQUEwQztBQUUxQyxNQUFNLEVBQUUsS0FBSyxFQUFDLElBQUksRUFBQyxJQUFJLEVBQUMsR0FBRyxFQUFFLEdBQUcsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0FBQ3BELE1BQU0sSUFBSSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQztBQUM5RCxNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO0FBRTNCLE1BQU0sS0FBSyxHQUFVLElBQUksZ0JBQUssRUFBRSxDQUFDO0FBQ2pDLE1BQU0sY0FBYyxHQUFnQixJQUFJLGtDQUFjLEVBQUUsQ0FBQztBQUd6RCxLQUFLLENBQUMsdUNBQXVDLEVBQUUsQ0FBTyxHQUFVLEVBQUUsRUFBRTtJQUVoRSxNQUFNLG9CQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3ZCLE1BQU0sb0JBQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDM0IsTUFBTSxNQUFNLENBQUMsb0JBQU8sQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsaUNBQWlDLENBQUMsQ0FBQztBQUV0RixDQUFDLENBQUEsQ0FBQyxDQUFDO0FBRUgsSUFBSSxDQUFDLHdEQUF3RCxFQUFFLEdBQVMsRUFBRTtJQUN0RSxNQUFNLE1BQU0sQ0FBQyxvQkFBTyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUM7QUFDdEUsQ0FBQyxDQUFBLENBQUMsQ0FBQztBQUVILGVBQWU7QUFFZixLQUFLLENBQUMsMkNBQTJDLEVBQUUsR0FBUyxFQUFFO0lBQzFELE1BQU0sb0JBQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDM0IsTUFBTSxLQUFLLENBQUMsVUFBVSxDQUFDLEtBQUssRUFBRSxDQUFDO0FBRW5DLENBQUMsQ0FBQSxDQUFDLENBQUM7QUFFSCxJQUFJLENBQUMsbUNBQW1DLEVBQUUsR0FBUyxFQUFFO0lBRWpELE1BQU0sS0FBSyxDQUFDLFVBQVUsQ0FBQyxLQUFLLEVBQUUsQ0FBQztBQUVuQyxDQUFDLENBQUEsQ0FBQyxDQUFDO0FBRUgsSUFBSSxDQUFDLCtGQUErRixFQUFFLENBQU0sUUFBZSxFQUFDLFFBQWUsRUFBRSxFQUFFO0lBQzNJLE1BQU0sS0FBSyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDeEMsTUFBTSxLQUFLLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUU1QyxDQUFDLENBQUEsQ0FBQyxDQUFDO0FBRUgsSUFBSSxDQUFDLGdDQUFnQyxFQUFFLEdBQVMsRUFBRTtJQUM5QyxNQUFNLEtBQUssQ0FBQyxZQUFZLENBQUMsS0FBSyxFQUFFLENBQUM7QUFFckMsQ0FBQyxDQUFBLENBQUMsQ0FBQztBQUVILElBQUksQ0FBQyxnRUFBZ0UsRUFBRSxHQUFTLEVBQUU7SUFDOUUsTUFBTSxNQUFNLENBQUMsY0FBYyxDQUFDLGNBQWMsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDO0FBQzVELENBQUMsQ0FBQSxDQUFDLENBQUMifQ==