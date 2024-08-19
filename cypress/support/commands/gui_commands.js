Cypress.Commands.add('LoggingInSuccessfully', () => {
    const options = { cacheSession: false }
    cy.visit('/', {
        headers: {
            failOnStatusCode: false,
            'accept': 'application/json, text/plain, */*'
        }
    });

    cy.get('[id="username"]').should('be.visible').type(Cypress.env('username'), options);
    cy.get('[id="password"]').should('be.visible').type(Cypress.env('password'), options);
    cy.get('[id="kc-login"]').should('be.visible').click();
})
