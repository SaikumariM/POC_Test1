import { browser } from "protractor";
import { Logout } from "../Pages/Logout.po";

const { Given,When,Then,And } = require("cucumber");
const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;

const logout: Logout =new Logout();
When(/^User clicks usename profile$/, async () => {
    await logout.userNameProfile.click();
   
      
});

When(/^User clicks on Logout button$/, async () => {
    await logout.logout.click();
      
});


Then(/^User validates Logout application as successfully..$/, async () => {
    await expect(logout.homeMenu.isPresent());

});