
// <reference types="cypress" />
/// <reference types="cypress-iframe" />
import 'cypress-iframe';

import { Given, When, Then, DataTable } from '@badeball/cypress-cucumber-preprocessor';

Given(`i navigate to the Demoblaze ecommerce website`, () => {
    cy.visit('https://www.demoblaze.com/')
    cy.get('#signin2').should('be.visible')

});

When(`i click on the signup button`, () => {
    cy.get('#signin2').should('be.visible').click()
});

When(`i enter a valid username and password`, () => {
    cy.get("#sign-username").should('be.visible').type("aify")
    cy.wait(4000)
    cy.get("#sign-password").should('be.visible').type("love")
    cy.wait(4000)
});

When(`i click on sign up button`, () => {
    cy.get("button[onclick='register()']").should('be.visible').click()
});

Then(`i should successfully signup`, () => {
   
});

When(`i enter a valid username`, () => {
    cy.get("#sign-username").should('be.visible').type("aify")
    cy.wait(4000)
});

Then(`i should get an error message Please fill out Username and Password.`, () => {
    //assert that sign up should be unsuccessful
    cy.on('window:alert', (text) => {
        expect(text).to.contain('Please fill out Username and Password.').click()// error message to fill username and passcode to pop up

          cy.get('.btn btn-secondary').contains('Close').should('be.visible')//assert that the close button is visible

            cy.wait(4000)
    })

});

When(`i enter a valid password`, () => {
    cy.get("#sign-password").should('be.visible').type("love")
    cy.wait(4000)


    
});