/// <reference types="cypress" />

// Importando cenários de diferentes funcionalidades
import { scenarios as corporateScenarios } from '../../fixtures/scenarios/A/scenarios';
import { scenarios as digitalShippingScenarios } from '../../fixtures/scenarios/digitalRemittance/scenarios';

// Inicializando a variável para o token
let token;

// Combinando todos os cenários em um único array
const allScenarios = [...corporateScenarios, ...digitalShippingScenarios];

// Executado antes de todos os testes para obter o token
before(() => {
    cy.token('stg');
    cy.fixture('token-stg').then(arr => token = arr);
});

// Função para validar cenários agrupados por contexto
describe('Validate all scenarios', () => {
    // Obtendo todos os contextos únicos dos cenários combinados
    const uniqueContexts = [...new Set(allScenarios.map(data => data.context))];

    // Iterando sobre cada contexto único
    uniqueContexts.forEach(contextName => {
        // Filtrando cenários que pertencem ao contexto atual
        const contextScenarios = allScenarios.filter(data => data.context === contextName);

        // Criando um bloco de contexto no Mocha para o contexto atual
        context(`Context: ${contextName}`, () => {
            // Obtendo todas as funcionalidades únicas dentro do contexto atual
            const uniqueFeatures = [...new Set(contextScenarios.map(data => data.feature))];

            uniqueFeatures.forEach(featureName => {
                const featureScenarios = contextScenarios.filter(data => data.feature === featureName);

                // Criando um bloco de funcionalidade dentro do contexto
                describe(`Feature: ${featureName}`, () => {
                    featureScenarios.forEach(data => {
                        // Criando um teste para cada cenário dentro da funcionalidade atual
                        it(`Scenario: ${data.name}`, () => {
                            const requestToken = data.useAuthentication ? token : undefined;
                            cy.req(data.method, data.url, requestToken).then(respReq => {
                                // Verificando se o statusCode da resposta é igual ao esperado
                                expect(respReq.statusCod).to.equal(data.expectedStatusCode);
                                // Executando a função de asserção específica para o cenário
                                data.assertionFunction(respReq.retBody);
                            });
                            // Tirando uma captura de tela após a execução do teste
                            cy.screenshot();
                        });
                    });
                });
            });
        });
    });
});
