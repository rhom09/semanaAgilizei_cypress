/// <reference types="cypress" />

context('Cadastro', () => {
    it('cadastro de usuario no site', () => {
        cy.visit('Register.html');

        cy.get('input[ng-model="FirstName"]').type('Romilton')
        cy.get("input[ng-model='LastName']").type('Viana')
        cy.get("textarea[ng-model='Adress']").type('Via Transversal Sul')
        cy.get('input[ng-model="EmailAdress"]').type('rhom0909@teste.com')
        cy.get('input[ng-model="Phone"]').type('959906029')
    });
});
