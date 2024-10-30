Feature: Demoblaze login functionality test

@loginfunctionality 
    Scenario Outline: login functionality of the demoblaze website
    Given I navigate to demoblaze ecommerce website
    Then the product store page should displayed
    When i click on Login link
    When i enter '<Username>' and '<Password>'
    When i click on Login Button
    Then i should get a message '<message>'
    

    Examples:
        |Username|Password|message     |
        |aify    |love    |Welcome aify|
        |aif     |lov     |User does not exist.|

    

