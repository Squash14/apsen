/// <reference types="cypress" />
/// <reference types="cypress-xpath" />

import CommonElements from '../elements/common';

const common = new CommonElements;

class HeaderPage {
    //Verificando a existencia da LOGO
    logo(){
        cy.get(common.logo()).should('be.visible');
    };

    // Verifique se todos os elementos principais estão presentes
    mainElementsPresent(){
        cy.get('header').should('be.visible');
        cy.get('footer').should('be.visible');
    };

    // Verifique a presença da tag de título
    presenceOfTheTitleTag(){
        cy.title().should('not.be.empty').and('include', 'Apsen - Inspirados pela saúde');
    };
};

export default new HeaderPage();