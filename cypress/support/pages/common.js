/// <reference types="cypress" />
/// <reference types="cypress-xpath" />

import CommonElements from '../elements/common';

const common = new CommonElements;

class CommonPage {
    //Verifique se não há erros de console
    checkForConsoleErrors(){
        cy.window().then((win) => {
            cy.stub(win.console, 'error').as('consoleError');
        });
        cy.get('@consoleError').should('not.be.called');
    };
};

export default new CommonPage();