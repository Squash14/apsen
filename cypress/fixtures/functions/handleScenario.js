export function handleScenarioAssertions(data, respReq, id) {
    switch (data.scenario) {
        case 'Returns - StatusCode 404':
            const status = respReq.retBody.status;
            const error = respReq.retBody.error;
            const message = respReq.retBody.message;
            expect(status).to.deep.equal(404);
            expect(error).to.deep.equal('Not Found');
            expect(message).to.deep.equal("text here");
            break;
        case 'Returns - StatusCode 200':
            expect(respReq.retBody.id).to.deep.equal(123);
            expect(respReq.retBody.numeroProcesso).to.deep.equal("value here");
            expect(respReq.retBody.idOrgaoLotado).to.deep.equal("value here");
            expect(respReq.retBody.dataCriacao).to.deep.equal("data here");
            expect(respReq.retBody.cartaPrecatoriaStatusEnum).to.deep.equal("text here");
            break;
        case 'returns - StatusCode 200':
            data.assertResponse(cy, respReq, data.expectedRetBody);
            break;
        case 'StatusCode 200':
            break;
        case 'StatusCode 401':
            break;
        case 'Delete successfully - StatusCode 204':
            break;
    };
};

export function expectSuccessOperation(cy, respReq, expectResp, id) {
    expect(respReq.retBody).to.have.property('id');
    cy.wrap(respReq.retBody.id).as('newId');
    cy.get('@newId').then((newId) => {
        id = newId;
    });
};

export function getUrlByMethod(data, id) {
    const scenarioUrlMap = {
        'text here': `${data.url}/${id}/endpointRelative`,
        'text here': `${data.url}/${id}/endpointRelative`,
        'text here': `${data.url}/${id}/endpointRelative`,
        'text here': `${data.url}/${id}/endpointRelative`,
        //Delete
        'text here': `${data.url}/${id}`
    };

    if (data.requestWithParam && scenarioUrlMap[data.scenario]) {
        return scenarioUrlMap[data.scenario];
    }

    return data.url;
};