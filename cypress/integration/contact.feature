Feature: Contact functionality
    Scenario:Contact functions
        Given I navigate to demoblaze ecommerce website
        Then the PRODUCT STORE  page should displayed
        When i click on the Contact
        When i enter my email address
        When i enter my name
        When i type a comment
        When i click on the send message button
        Then i should get a success delivery message