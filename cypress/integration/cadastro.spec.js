/// <reference types="cypress" />

let Chance = require('chance')
let chance = new Chance();

context('Cadastro', () => {
    it('cadastro de usuario no site', () => {
       
        //Rotas para fazer as asserções
        cy.server();

        cy.route('POST', '**/api/1/databases/userdetails/collections/newtable?**').as('postNewtable');
        cy.route('POST', '**/api/1/databases/userdetails/collections/usertable?**').as('postNewuser');
        cy.route('GET', '**/api/1/databases/userdetails/collections/newtable?**').as('getNewtable');

        cy.visit('Register.html');

        cy.get('input[ng-model="FirstName"]').type(chance.first())
        cy.get("input[ng-model='LastName']").type(chance.last())
        cy.get("textarea[ng-model='Adress']").type(chance.address())
        cy.get('input[ng-model="EmailAdress"]').type(chance.email())
        cy.get('input[ng-model="Phone"]').type(chance.phone({formatted: false}))

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

        cy.get('#imagesrc').attachFile('image.png')

        cy.get('#submitbtn').click()

        cy.wait('@postNewtable').then((resNewtable) => {
            expect(resNewtable.status).to.eq(200)
        })

        cy.wait('@postNewuser').then((resNewuser) => {
            expect(resNewuser.status).to.eq(200)
        })

        cy.wait('@getNewtable').then((resNewtable) => {
            expect(resNewtable.status).to.eq(200)
        })

        cy.url().should('contain', 'WebTable')
    });
});



