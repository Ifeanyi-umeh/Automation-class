Feature: Demoblaze login functionality test

  Application regression

  @login1 @smoke @regression
  Scenario Outline: Testing if a list of items loads correctly on a webpage
    Given I navigate to the Demoblaze ecommerce website
    When I click the login button
    And I login with "<username>" and "<password>"
    Then I validate list of products

  Examples:
    | username | password  |
    | aify | love |
    | ifeanyi    |  umeh     |

  Scenario Outline: Testing internal server error
    Given I navigate to the Demoblaze ecommerce website
    When I click the login button
    When I login with username and password
    Then the user should see an error message
