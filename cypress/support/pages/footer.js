/// <reference types="cypress" />
/// <reference types="cypress-xpath" />

import FooterElements from '../elements/footer';

const footer = new FooterElements;

class FooterPage {
    // Validação de elementos do footer
    elements(){
        // Deve encontrar o título de redes sociais
        cy.contains('h3', 'Siga as nossas Redes Sociais').should('be.visible');
        // Valida o ícone do Instagram
        cy.get('img[alt="Instagram"]').should('have.attr', 'src', '/img/icon_instagram.svg');
        // Valida o ícone do Facebook
        cy.get(footer.facebook()).should('have.attr', 'src', '/img/icon_facebook.svg');
        // Valida o ícone do Youtube
        cy.get(footer.Youtube()).should('have.attr', 'src', '/img/icon_youtube.svg');
        // Valida o ícone do Linkedin
        cy.get(footer.Linkedin()).should('have.attr', 'src', '/img/icon_linkedin.svg');
        // Valida o link do Portal de Privacidade
        cy.contains('a', 'Portal de Privacidade').should('have.attr', 'href', '/portal-da-privacidade');
        // Valida o link da Política de Privacidade
        cy.contains('a', 'Política de Privacidade').should('have.attr', 'href', '/politica-de-privacidade');
        // Valida o link da Logística Reversa de Medicamentos
        cy.contains('a', 'Logística Reversa de Medicamentos').should('have.attr', 'href', 'https://www.logmed.org.br/');
        // Valida o link do Webmail
        cy.contains('a', 'Webmail').should('have.attr', 'href', 'https://webmail.apsen.com.br/?_ga=2.52042154.2097850199.1681411906-981668781.1678446759&_gl=1*1c8ama7*_ga*OTgxNjY4NzgxLjE2Nzg0NDY3NTk.*_ga_HFTMQLB0EF*MTY4MTQxMTkwNi4xNy4wLjE2ODE0MTE5MDcuMC4wLjA.');
        // Valida o link do Fale Conosco
        cy.contains('a', 'Fale Conosco').should('have.attr', 'href', '/fale-conosco');
        // Valida o parágrafo de direitos autorais
        cy.contains('p', 'Apsen Farmacêutica 2023. Todos os direitos reservados').should('be.visible');
    };
};

export default new FooterPage();