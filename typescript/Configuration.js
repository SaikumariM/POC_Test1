"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
const alloc = require('buffer-alloc');
const allocUnsafe = require('buffer-alloc-unsafe');
const protractor_1 = require("protractor");
exports.config = {
    // seleniumAddress: "http://127.0.0.1:4444/wd/hub",
    directConnect: true,
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    SELENIUM_PROMISE_MANAGER: false,
    Capabilities: {
        browserName: 'chrome'
    },
    specs: ['./Features/login.feature'],
    onPrepare: () => {
        //browser.ignoreSynchronization=false,
        protractor_1.browser.manage().window().maximize();
    },
    cucumberOpts: {
        compiler: "ts:ts-node/register",
        require: 'Step_Definitions/logInPage.js',
        strict: true,
        tags: "@CucumberScenario or @ProtractorScenario or @TypeScriptScenario or @OutlineScenario"
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29uZmlndXJhdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL0NvbmZpZ3VyYXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQ0EsTUFBTSxLQUFLLEdBQUcsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFBO0FBQ3JDLE1BQU0sV0FBVyxHQUFHLE9BQU8sQ0FBQyxxQkFBcUIsQ0FBQyxDQUFBO0FBRWxELDJDQUF5RTtBQUU5RCxRQUFBLE1BQU0sR0FBVztJQUUxQixtREFBbUQ7SUFDcEQsYUFBYSxFQUFDLElBQUk7SUFFbEIsU0FBUyxFQUFDLFFBQVE7SUFFbEIsYUFBYSxFQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUMsK0JBQStCLENBQUM7SUFJaEUsd0JBQXdCLEVBQUUsS0FBSztJQUMvQixZQUFZLEVBQUc7UUFDWCxXQUFXLEVBQUUsUUFBUTtLQUNyQjtJQUVKLEtBQUssRUFBQyxDQUFDLDBCQUEwQixDQUFDO0lBR2xDLFNBQVMsRUFBRSxHQUFHLEVBQUU7UUFDZCxzQ0FBc0M7UUFDdEMsb0JBQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUV4QyxDQUFDO0lBRUMsWUFBWSxFQUFDO1FBQ2IsUUFBUSxFQUFFLHFCQUFxQjtRQUM5QixPQUFPLEVBQUMsK0JBQStCO1FBQ3ZDLE1BQU0sRUFBRSxJQUFJO1FBQ1AsSUFBSSxFQUFFLHFGQUFxRjtLQUMvRjtDQUdILENBQUMifQ==