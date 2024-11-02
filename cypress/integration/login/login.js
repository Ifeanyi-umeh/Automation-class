/// <reference types="cypress" />
/// <reference types="cypress-iframe" />
import 'cypress-iframe';

import {Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

beforeEach( function(){
    cy.fixture('example').then(function(data)
    {
  this.data ; data    
    })
})
Given('I navigate to demoblaze ecommerce website', () => {
  cy.visit("https://www.demoblaze.com/")
  
});

Then('the PRODUCT STORE  page should displayed', () => {
  cy.get("a[class='navbar-brand']").should('contain','PRODUCT STORE')
});

When('i click on Login link', () => {
  cy.get('a[id="login2"]').should('be.visible').click()
});
When("i enter invalid {string} and {string}", (Username, Password) => {
  cy.wait(2000)
  cy.get("#loginusername").should('be.visible').type(username)
  cy.wait(2000)
  cy.get("#loginpassword").should('be.visible').type(password)

});

When('I click on Login Button', () => {
  cy.get('button[onclick="logIn()"]').should('be.visible').click()
});

Then("i should get an alert error {string}", (message) => {
      cy.on('window:alert', function(alertMessage){
          expect(alertMessage).to.contains(message)
});
});
When("I enter valid {string} and {string}", (Username, Password) => {
  cy.wait(2000)
  cy.get("#loginusername").should('be.visible').type(Username)
  cy.wait(2000)
  cy.get("#loginpassword").should('be.visible').type(Password)

});


Then("I should get different result {string}", (message) => {
  cy.get("#nameofuser").should('contain.text', message)
});

When('I enter below data', (dataTable) => {
  cy.wait(2000)

  const { Username, Password, SuccessMessage, FailMessage } = dataTable.hashes()[0];
  cy.wait(2000)
  cy.get("#loginusername").should('be.visible').type(Username)
  cy.wait(2000)
  cy.get("#loginpassword").should('be.visible').type(Password)

  cy.wrap(SuccessMessage).as('expectedSuccessMessage');
  cy.wrap(FailMessage).as('expectedFailMessage');
  
});


Then('I should get different results input', () => {
  cy.get('@expectedSuccessMessage').then((SuccessMessage) => {
      cy.get('@expectedFailMessage').then((FailMessage) => {
        if (SuccessMessage) {
          cy.get('#nameofuser').should('contain.text', SuccessMessage);

        } else if (FailMessage) {
          cy.on('window:alert', (alertText) => {
            expect(alertText).to.equal(FailMessage);
          });
        }
      });
     });
    });


