import headers from '../../fixtures/auth/stg.json';
import body from '../../fixtures/auth/stg.json';

import { validateSchema } from './validateSchema'
Cypress.Commands.add('validateSchema', validateSchema)

const urlStg = "https://apsen.com.br";

let requestHeaders = {
    "stg": {
        headers: headers,
        url: urlStg
    }
};

// GET token
Cypress.Commands.add('token', (login) => {

    let authObject = requestHeaders[login]

    cy.api(
        {
            method: 'POST',
            url: authObject.url,
            headers: authObject.headers,
            form: true,
            body: body,
            failOnStatusCode: false

        }).then((resp) => {

            expect(resp).to.have.property('status', 200)

            cy.writeFile(`cypress/fixtures/token-${login}.json`, {
                "content-type": "application/json",
                "authorization": `${resp.body['token_type']} ${resp.body['access_token']}`
            });
            cy.screenshot();
        });
});

// comparar dados de retorno
Cypress.Commands.add('comparaRet', (atual, esperado) => {
    cy.log(`Retorno API: ${JSON.stringify(atual)}`)

    expect(atual).to.deep.equal(esperado)
});

// realiza request
Cypress.Commands.add('req', (method, url, token, body) => {
    cy.api(
        {
            method: method,
            url: url,
            failOnStatusCode: false,
            headers: token,
            body: body

        }).then((resp) => {
            const statusCod = resp.status
            const statusDesc = resp.statusText
            const retBody = resp.body

            const respReq = {
                statusCod: statusCod,
                statusDesc: statusDesc,
                retBody: retBody
            }

            return respReq
        });
});