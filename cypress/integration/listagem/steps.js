/// <reference types="cypress" />


Given(/^que o site não possui registro$/, () => {
    cy.server();
    cy.route({
        method: 'GET',
        url: '**/api/1/databases/userdetails/collections/newtable?**',
        status: 200,
        response: 'fixture:webtable-get-void'
    }).as('getNewtable');
});

When(/^acessar a listagem$/, () => {
    cy.visit('WebTable.html')
});

Then(/^devo visuailizar a listagem vazia$/, () => {
    cy.get('div[role=row]').should('have.length', 1)
});

Given(/^que o site possui apenas um registro$/, () => {
    cy.server();
    cy.route({
        method: 'GET',
        url: '**/api/1/databases/userdetails/collections/newtable?**',
        status: 200,
        response: 'fixture:webtable-get-only'
    })
});

Then(/^devo visualizar apenas um registro$/, () => {
    cy.get("div[role='gridcell']").eq(4).find('div').as('gridCellPhone')
    cy.get('@gridCellPhone').should('contain.text', '9240321298')
});
