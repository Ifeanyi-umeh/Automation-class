/// <reference types="cypress" />
/// <reference types="cypress-iframe" />
import 'cypress-iframe';

import {Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

beforeEach( function(){
    cy.fixture('example').then(function(data)
    {
  this.data ; data    
    })
    // Navigating network request
    cy.intercept('https://www.demoblaze.com/config.json').as('config')
    cy.intercept("https://api.demoblaze.com/viewcart"
    ).as('viewcart')

})
Given ('I navigate to demoblaze ecommerce website', function(){

  cy.visit('https://www.demoblaze.com/')
  cy.wait(2000)
})
Then("the product store page should displayed", function(){
  cy.get("a[class='navbar-brand']").should('contain', 'PRODUCT STORE')
})
When("i click on Login link",function(){
  cy.get("a[id='login2']").should('be.visible').click()
})
When("i enter {string} and {string}", (Username, Password) => {
  cy.wait(4000);
  cy.get("input[id='loginusername']").should('be.visible').type(Username);
  cy.wait(4000);
  cy.get("input[id='loginpassword']").should('be.visible').type(Password);
  cy.wait(4000);
});

When("i click on Login Button",function(){
  cy.get("button[onclick='logIn()']").should('be.visible').click()
})

//validate successful login with valid details
Then("i should get a message {string}",function(){
  cy.get('#nameofuser').get('a').should('be.visible').and('contain', 'Welcome aify');
  // cy.wait(10000)
    cy.get('#logout2').should('be.visible')
    cy.get('#logout2').click();
})
    
    //validate successful login with invalid details
    When("i enter invalid {string} and {string}", (username, password) => {
      // });
      cy.wait(2000)
      cy.get("#loginusername").should('be.visible').type(username)
      cy.wait(2000)
      cy.get("#loginpassword").should('be.visible').type(password)
  });
  
  Then("i should get an alert error {string}", (message) => {
    cy.wait(2000)

  })
    cy.on('window:alert', function(alertMessage){
        expect(alertMessage).to.contains(message)
});

    
    






