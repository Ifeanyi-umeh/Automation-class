# Feature: Demoblaze login functionality test

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
        



    
Scenario outline for login functionality
   #Given I navigate to demoblaze ecommerce website
   #Then the product store page should displayed
   #When i click on Login link

When i enter below data
| username   | password   | successmessage   | failmessage   |
| <Username> | <Password> | <SuccessMessage> | <FailMessage> |
When I click on Login Button

   

