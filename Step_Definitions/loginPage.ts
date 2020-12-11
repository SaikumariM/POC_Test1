
import { browser } from "protractor";
import { AccountSummary } from "../Pages/AccountSummary.po";
import { Login } from "../Pages/Login.po";

const { Given,When,Then,And } = require("cucumber");
const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;

const login: Login = new Login();
const accountSummary:AccountSummary=new AccountSummary();


Given(/^User giving "(.*)" of the Zero Bank$/, async (URL:string) => {
    
    await browser.get(URL);
    await browser.sleep(20000);
    await expect(browser.getCurrentUrl()).to.equal("http://zero.webappsecurity.com/");
    
});

Then(/^User validates Title of the application as Zero Bank$/, async () => {
    await expect(browser.getTitle()).to.eventually.equal("Zero Bank");
});

//Feature Login

Given(/^User navigates to the website Zero Bank$/, async () => {
    await browser.sleep(20000);
    await login.signInHome.click();
      
});

When(/^there user clicks Signin Button$/, async () => {
    
    await login.signInHome.click();
      
});

When(/^there user logs in through Signin Window by using Username as "(.*)" and Password as "(.*)"$/, async(username:string,password:string) =>{
    await login.userName.sendKeys(username);
    await login.password.sendKeys(password);
    
});

When(/^User clciks on SignIn Button$/, async () => {
    await login.signInButton.click();
      
});

Then(/^Validate User SignIn the Zero Bank application successfully.$/, async () => {
    await expect(accountSummary.accountSummary.isPresent());
});






