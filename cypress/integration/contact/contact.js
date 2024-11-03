import { Given, When, Then, DataTable } from '@badeball/cypress-cucumber-preprocessor';

Given(`I navigate to demoblaze ecommerce website`, () => {
    cy.visit("https://www.demoblaze.com/")
});

Then(`the PRODUCT STORE  page should displayed`, () => {
    cy.get("a[class='navbar-brand']").should('contain','PRODUCT STORE')
});

When(`i click on the Contact`, () => {
    cy.get(':nth-child(2) > .nav-link').click()
});


When(`i enter my email address`, () => {
    cy.get('#recipient-email').should('be.visible').type("softgirl@gmail.com")
    cy.wait(2000)
});

When(`i enter my name`, () => {
    cy.get('#recipient-name').should('be.visible').type("daddy girl")
});

When(`i type a comment`, () => {
    cy.get('#message-text').should('be.visible').type("i love you")
});

When(`i click on the send message button`, () => {
    cy.get('button[onclick="send()"]').should('be.visible').click()
    cy.wait(4000)
});

Then(`i should get a success delivery message`, () => {
    cy.on('window:alert', function(alertMessage){
        expect(alertMessage).to.contains(message)
    })
});