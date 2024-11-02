
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
         | Username | Password | SuccessMessage | FailMessage                            |
         | aify     | love     | Welcome aify   |                                        |
         | aif      | love     |                | User does not exist.                   |
         | 123      | love     |                | Please fill out Username and Password. |
         | aify     | 123      |                | Please fill out Username and Password. |
         | 1123     | 123      |                | Please fill out Username and Password. |
         |aify      |          |                |Please fill out Username and Password.  |
         |          |love      |                |Please fill out Username and Password.  |
         |          |          |                |Please fill out Username and Password.  |

   