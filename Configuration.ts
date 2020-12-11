import * as path from "path";
const alloc = require('buffer-alloc')
const allocUnsafe = require('buffer-alloc-unsafe')

import {browser,Config,Capabilities,ProtractorBrowser} from "protractor";

export let config: Config = {

  // seleniumAddress: "http://127.0.0.1:4444/wd/hub",
 directConnect:true,
 
 framework:'custom',
 
 frameworkPath : require.resolve('protractor-cucumber-framework'),

 

 SELENIUM_PROMISE_MANAGER: false,
 Capabilities:  {
     browserName :'chrome'
    },

 specs:['./Features/login.feature'],


 onPrepare: () => {
   //browser.ignoreSynchronization=false,
   browser.manage().window().maximize();
   
},

  cucumberOpts:{
  compiler: "ts:ts-node/register",
   require:'Step_Definitions/logInPage.js',
   strict: true,
        tags: "@CucumberScenario or @ProtractorScenario or @TypeScriptScenario or @OutlineScenario"
   }


};