Feature: Demoblaze ecommerce functionality test 

@signupwithvaliddetails
Scenario: Sign up with valid details
Given i navigate to the Demoblaze ecommerce website
When i click on the signup button
When i enter a valid username and password
When i click on sign up button
Then i should successfully signup

@signup
Scenario: Sign up with with username only
Given i navigate to the Demoblaze ecommerce website
When i click on the signup button
When i enter a valid username
When i click on sign up button
Then i should get an error message Please fill out Username and Password.

@signupwithpasswordonly @smoke
Scenario: Sign up with with password only
Given i navigate to the Demoblaze ecommerce website
When i click on the signup button
When i enter a valid password
When i click on sign up button
Then i should get an error message Please fill out Username and Password.

Scenario: Sign up without inputing and details
Given i navigate to the Demoblaze ecommerce website
When i click on the signup button
When i click on sign up button
Then i should get an error message Please fill out Username and Password.

