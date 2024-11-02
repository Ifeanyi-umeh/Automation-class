 #Feature: Demoblaze login functionality test

# @loginwithvaliddetails
#     Scenario Outline: login functionality of the demoblaze website
#     Given I navigate to demoblaze ecommerce website
#     Then the product store page should displayed
#     When i click on Login link
#     When i enter '<Username>' and '<Password>'
#     When i click on Login Button
#     Then i should get a message '<message>'
    

#     Examples:
#         |Username|Password|message     |
#         |aify    |love    |Welcome aify|
     
# @loginwithinvalidetails
#         Scenario Outline:  name: login functionality of the demoblaze website
#     Given I navigate to demoblaze ecommerce website
#     Then the product store page should displayed
#     When i click on Login link
#     When i enter invalid "<Username>" and "<Password>"
#     When i click on Login Button
#     Then i should get an alert error "<message>"

#     Examples:
#         |inUsername|inPassword|message     |
#         |aif     |lov     |User does not exist.|
        


  Feature: Demoblaze login functionality test
    @loginfunctionality
    Scenario Outline: Login functionlity for demoblaze website
   
   Given I navigate to demoblaze ecommerce website
   Then the PRODUCT STORE  page should displayed
   When i click on Login link

When I enter below data
| Username   | Password   | SuccessMessage   | FailMessage   |
| <Username> | <Password> | <SuccessMessage> | <FailMessage> |
When I click on Login Button
Then I should get different results input
Examples:
|Username|Password|SuccessMessage|FailMessage                           |
|aify    |love    |Welcome aify  |                                      |
|aif     |love    |              |User does not exist.                  |
|        |love    |              |Please fill out Username and Password.|
|aify    |        |              |Please fill out Username and Password.|
|        |        |              |Please fill out Username and Password.|


   

