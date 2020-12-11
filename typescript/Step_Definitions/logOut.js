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
const Logout_po_1 = require("../Pages/Logout.po");
const { Given, When, Then, And } = require("cucumber");
const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;
const logout = new Logout_po_1.Logout();
When(/^User clicks usename profile$/, () => __awaiter(void 0, void 0, void 0, function* () {
    yield logout.userNameProfile.click();
}));
When(/^User clicks on Logout button$/, () => __awaiter(void 0, void 0, void 0, function* () {
    yield logout.logout.click();
}));
Then(/^User validates Logout application as successfully..$/, () => __awaiter(void 0, void 0, void 0, function* () {
    yield expect(logout.homeMenu.isPresent());
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nT3V0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vU3RlcF9EZWZpbml0aW9ucy9sb2dPdXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFDQSxrREFBNEM7QUFFNUMsTUFBTSxFQUFFLEtBQUssRUFBQyxJQUFJLEVBQUMsSUFBSSxFQUFDLEdBQUcsRUFBRSxHQUFHLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQztBQUNwRCxNQUFNLElBQUksR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUM7QUFDOUQsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztBQUUzQixNQUFNLE1BQU0sR0FBVSxJQUFJLGtCQUFNLEVBQUUsQ0FBQztBQUNuQyxJQUFJLENBQUMsK0JBQStCLEVBQUUsR0FBUyxFQUFFO0lBQzdDLE1BQU0sTUFBTSxDQUFDLGVBQWUsQ0FBQyxLQUFLLEVBQUUsQ0FBQztBQUd6QyxDQUFDLENBQUEsQ0FBQyxDQUFDO0FBRUgsSUFBSSxDQUFDLGdDQUFnQyxFQUFFLEdBQVMsRUFBRTtJQUM5QyxNQUFNLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUM7QUFFaEMsQ0FBQyxDQUFBLENBQUMsQ0FBQztBQUdILElBQUksQ0FBQyx1REFBdUQsRUFBRSxHQUFTLEVBQUU7SUFDckUsTUFBTSxNQUFNLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDO0FBRTlDLENBQUMsQ0FBQSxDQUFDLENBQUMifQ==