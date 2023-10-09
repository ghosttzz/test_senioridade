/// <reference types="cypress" />
describe('API', () => {

  it('Calling a API', function () {
    cy.api({
      method: 'GET',
      failOnStatusCode: false,
      url: `https://api.publicapis.org/entries`
    }).then(resp => {
      expect(resp.status).eq(200);
      let api = []
      for (var i = 0; i != resp.body.entries.length; i++) {
        if (resp.body.entries[i].Category == "Authentication & Authorization") {
          api.push(resp.body.entries[i].API)
        }
      }
      api.forEach(function (request) {
        cy.log(`The ${request} that contains "Authentication & Authorization"`)
      })
      cy.log(`The number of times this category appears is ${api.length}`)

    })
  })


})