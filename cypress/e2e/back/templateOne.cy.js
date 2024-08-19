import bodyhere from '../../fixtures/functionalities/bodyCharacteristicsConfidentiallyUrgency';

let token;
let id;

//GET token
before(() => {
    cy.token('stg');
    cy.fixture('token-stg').then(arr => token = arr);
});

// Função que executa os testes
function executeTest(data) {
    const requestToken = data.useAuthentication ? token : undefined;
    const callUrl = getUrlByMethod(data, id);

    cy.req(data.method, callUrl, requestToken, data.sendingdata).then((respReq) => {
        expect(data.expectedStatusCode).to.deep.equal(respReq.statusCod);

        if (data.assertResponse === expectSuccessOperation) {
            updateId(respReq);
        };
        handleScenarioAssertions(data, respReq);
    });
    cy.screenshot({ capture: 'fullPage' });
}

describe.skip('Returns information from the source process.', () => {
    const baseUrl = Cypress.env('baseUrl');
    const consthere = 'value here';

    const scenarios = [
        { context: 'text here', scenario: 'text here', method: 'GET', useAuthentication: true, url: `${baseUrl}/endpointRelative`, requestWithParam: false, expectedStatusCode: 200 },
        { context: 'text here', scenario: 'text here', method: 'POST', useAuthentication: true, url: `${baseUrl}/endpointRelative`, sendingdata: bodyhere, requestWithParam: false, expectedStatusCode: 200, assertResponse: expectSuccessOperation },
        { context: 'text here', scenario: 'text here', method: 'PUT', useAuthentication: true, url: `${baseUrl}/endpointRelative`, sendingdata: bodyhere, requestWithParam: true, expectedStatusCode: 200 },
        { context: 'text here', scenario: 'text here', method: 'DELETE', useAuthentication: true, url: `${baseUrl}/endpointRelative`, sendingdata: bodyhere, requestWithParam: true, expectedStatusCode: 200 },
    ];

    scenarios.forEach(data => {
        it(`Scenario - ${data.scenario}`, function () {
            executeTest(data);
        });
    });
});

function updateId(response) {
    expect(response.retBody).to.have.property('id');
    cy.wrap(response.retBody.id).as('newId');
    cy.get('@newId').then((newId) => {
        id = newId;
    });
}