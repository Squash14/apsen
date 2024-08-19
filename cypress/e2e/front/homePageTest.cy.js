/// <reference types="cypress" />

import common           from '../../support/pages/common.js';
import header           from '../../support/pages/header.js';
import aboutUs          from '../../support/pages/aboutUs.js';
import footer           from '../../support/pages/footer.js';

describe('HomePage Tests', () => {

    // Deve carregar a homepage sem erros (Verificação de Carregamento Inicial)
    it('Initial Loading Verification', () => {

        // Acesse a homepage
        cy.visit('/', {headers: {failOnStatusCode: false}});

        // Verifique se todos os elementos principais estão presentes
        header.mainElementsPresent();
        header.logo();

        // // Verifique se não há erros de console
        // common.checkForConsoleErrors();

        // Verifique a presença da tag de título
        header.presenceOfTheTitleTag();

        // // Verifique a meta descrição
        // cy.get('meta[name="description"]').should('have.attr', 'content').and('not.be.empty');

        // // Verifique se as imagens têm alt-text
        // cy.get('img').each(($img) => {
        //     cy.wrap($img).should('have.attr', 'alt').and('not.be.empty');
        // });        

        // // Verifique se a tag canonical está presente
        // cy.get('link[rel="canonical"]').should('have.attr', 'href').and('include', 'http');
    });

    // Deve navegar para a página correta ao clicar nos links do menu (Navegação pelo Menu Principal)
    it('Access the "About Us" option', () => {

        // Verificação de link para a seção "Sobre nós"
        aboutUs.verification();
        footer.elements()
    });
});