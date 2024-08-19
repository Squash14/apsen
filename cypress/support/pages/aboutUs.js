/// <reference types="cypress" />
/// <reference types="cypress-xpath" />

import AboutUsElements from '../elements/aboutUs';

const aboutUs = new AboutUsElements;

class AboutUsPage {
    // Verificação de link para a seção "Sobre nós"
    verification() {
        cy.visit('/manifesto');
        cy.url().should('include', '/manifesto');
        cy.get('h2').should('contain', 'Somos energia em movimento.');
    };
};

export default new AboutUsPage();