/// <reference types="cypress" />

let Chance = require('chance')
let chance = new Chance();

context('Cadastro', () => {
    it('cadastro de usuario no site', () => {
        cy.visit('Register.html');

        cy.get('input[ng-model="FirstName"]').type('Romilton')
        cy.get("input[ng-model='LastName']").type('Viana')
        cy.get("textarea[ng-model='Adress']").type('Via Transversal Sul')
        cy.get('input[ng-model="EmailAdress"]').type('rhom0909@teste.com')
        cy.get('input[ng-model="Phone"]').type('959906029')

        // checkbox
        cy.get("input[value='Male']").check()
        cy.get("input[type='checkbox']").check('Movies')

        // select e select2
        cy.get('#Skills').select('Javascript')
        cy.get('#countries').select('Brazil')
        cy.get('#country').select('Netherlands', { force: true})
        cy.get('#yearbox').select('1987')
        cy.get("select[ng-model='monthbox']").select('April')
        cy.get('#daybox').select('8')

        cy.get('#firstpassword').type('Abc123@')
        cy.get('#secondpassword').type('Abc123@')
    });
});



