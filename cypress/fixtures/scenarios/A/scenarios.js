import * as common from '../../assertions/common/assertions';

export const scenarios = [
    { context: 'A', feature: 'Code', name: '200 - Sending a request', method: 'GET', useAuthentication: true, url: `${Cypress.env('baseUrl')}/endpointRelative`, requestWithParam: false, expectedStatusCode: 200, assertionFunction: assertions.responseStatusCode200 },
    { context: 'A', feature: 'Code', name: '400 - Sending a request', method: 'GET', useAuthentication: true, url: `${Cypress.env('baseUrl')}/endpointRelative`, requestWithParam: false, expectedStatusCode: 400, assertionFunction: assertions.responseStatusCode400 },
    { context: 'A', feature: 'Code', name: '401 - Sending a request', method: 'GET', useAuthentication: false, url: `${Cypress.env('baseUrl')}/endpointRelative`, requestWithParam: false, expectedStatusCode: 401, assertionFunction: common.responseStatusCode401 },
    { context: 'A', feature: 'Code', name: '404 - Sending a request', method: 'GET', useAuthentication: true, url: `${Cypress.env('baseUrl')}/endpointRelative`, requestWithParam: false, expectedStatusCode: 404, assertionFunction: common.responseStatusCode404 },
    { context: 'A', feature: 'Code', name: '500 - Sending a request', method: 'GET', useAuthentication: true, url: `${Cypress.env('baseUrl')}/endpointRelative`, requestWithParam: false, expectedStatusCode: 500, assertionFunction: common.responseStatusCode500 },
];