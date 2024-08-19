export function responseStatusCode400(respBody) {
    expect(respBody.status).to.deep.equal(400);
    expect(respBody.error).to.deep.equal("Bad Request");
    expect(respBody.message).to.deep.equal("inválido.");
};

export function responseStatusCode401(respBody) {
    expect(respBody.status).to.deep.equal(401);
    expect(respBody.error).to.deep.equal("Unauthorized");
};

export function responseStatusCode404(respBody) {
    expect(respBody.status).to.deep.equal(404);
    expect(respBody.error).to.deep.equal("Not Found");
};

export function responseStatusCode500(respBody) {
    expect(respBody.status).to.deep.equal(500);
    expect(respBody.error).to.deep.equal("Internal Server Error");
    expect(respBody.message).to.deep.equal("An unexpected error occurred");
};