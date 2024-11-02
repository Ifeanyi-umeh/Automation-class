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


When('I enter below data', (dataTable) => {
  cy.wait(2000)

  const { Username, Password, SuccessMessage, FailMessage } = dataTable.hashes()[0];
  cy.wait(2000)
  if(Username)//when user enters only username
  cy.get("#loginusername").should('be.visible').type(Username)
  cy.wait(2000)
  if(Password)//when user enters password only
  cy.get("#loginpassword").should('be.visible').type(Password)
  cy.wrap(SuccessMessage).as('expectedSuccessMessage');
  cy.wrap(FailMessage).as('expectedFailMessage');
  cy.log("Password field is left empty as per test case");
  cy.log("Username field is left empty as per test case");
  cy.log("Username and Password field is left empty as per test case");
});
When('I click on Login Button', () => {
  cy.get('button[onclick="logIn()"]').should('be.visible').click()
});

Then('I should get different results input', () => {
  cy.get('@expectedSuccessMessage').then((SuccessMessage) => {
      cy.get('@expectedFailMessage').then((FailMessage) => {
        if (SuccessMessage) {
          cy.get('#nameofuser').should('contain.text', SuccessMessage);

        } else if (FailMessage) {
          cy.on('window:alert', (alertText) => {
            if (password) {
              cy.get("#loginpassword").should('be.visible');
            }
            expect(alertText).to.equal(FailMessage);
            
            
          });
        }
      });
     });
    });





