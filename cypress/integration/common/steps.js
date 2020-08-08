// Steps - Passos comuns a mais de uma feature
Given(/^que acesso o site$/, () => {
    //Rotas para fazer as asserções
    cy.server();

    cy.route('POST', '**/api/1/databases/userdetails/collections/newtable?**').as('postNewtable');
    cy.route('POST', '**/api/1/databases/userdetails/collections/usertable?**').as('postNewuser');
    cy.route('GET', '**/api/1/databases/userdetails/collections/newtable?**').as('getNewtable');

    cy.visit('Register.html');
});