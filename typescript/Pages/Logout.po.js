"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logout = void 0;
const protractor_1 = require("protractor");
class Logout {
    // public signInButton:ElementFinder;
    constructor() {
        this.userNameProfile = protractor_1.$("#settingsBox > ul > li:nth-child(3) > a");
        this.logout = protractor_1.$("//a[@id='logout_link']");
        this.homeMenu = protractor_1.$("//li[@id='homeMenu']");
    }
}
exports.Logout = Logout;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTG9nb3V0LnBvLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vUGFnZXMvTG9nb3V0LnBvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDJDQUE4QztBQUU5QyxNQUFhLE1BQU07SUFJaEIscUNBQXFDO0lBRXBDO1FBQ0ksSUFBSSxDQUFDLGVBQWUsR0FBRyxjQUFDLENBQUMseUNBQXlDLENBQUMsQ0FBQztRQUNwRSxJQUFJLENBQUMsTUFBTSxHQUFHLGNBQUMsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO1FBQzFDLElBQUksQ0FBQyxRQUFRLEdBQUMsY0FBQyxDQUFDLHNCQUFzQixDQUFDLENBQUM7SUFJNUMsQ0FBQztDQUNKO0FBZEQsd0JBY0MifQ==