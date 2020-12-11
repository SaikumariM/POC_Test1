Feature: Zero Bank Application 
Scenario: Launching the Zero Bank application site
Given User giving "http://zero.webappsecurity.com/" of the Zero Bank
Then User validates Title of the application as Zero Bank 

Feature: Signin
Scenario:Signin Functionality
Given User navigates to the website Zero Bank
And there user clicks Signin Button
When there user logs in through Signin Window by using Username as "username" and Password as "password"
And User clciks on SignIn Button
Then Validate User SignIn the Zero Bank application successfully.


  


