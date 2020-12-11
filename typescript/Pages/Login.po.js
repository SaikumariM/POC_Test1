"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Login = void 0;
const protractor_1 = require("protractor");
class Login {
    constructor() {
        this.signInHome = protractor_1.$("//button[@id='signin_button']");
        this.userName = protractor_1.$("//input[@id='user_login']");
        this.password = protractor_1.$("//input[@id='user_password']");
        this.signInButton = protractor_1.$("//input[@name='submit']");
    }
}
exports.Login = Login;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTG9naW4ucG8uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9QYWdlcy9Mb2dpbi5wby50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSwyQ0FBOEM7QUFFOUMsTUFBYSxLQUFLO0lBTWQ7UUFDSSxJQUFJLENBQUMsVUFBVSxHQUFHLGNBQUMsQ0FBQywrQkFBK0IsQ0FBQyxDQUFDO1FBQ3JELElBQUksQ0FBQyxRQUFRLEdBQUcsY0FBQyxDQUFDLDJCQUEyQixDQUFDLENBQUM7UUFDL0MsSUFBSSxDQUFDLFFBQVEsR0FBRyxjQUFDLENBQUMsOEJBQThCLENBQUMsQ0FBQztRQUNsRCxJQUFJLENBQUMsWUFBWSxHQUFDLGNBQUMsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO0lBQ25ELENBQUM7Q0FDSjtBQVpELHNCQVlDIn0=