describe('The intercept API method', () => {
  it('should use an empty body as the response for signature #1', () => {
    // cy.intercept(url, routeHandler?)
    cy.intercept('/todos/1', {}).as('json')

    cy.visit('/')

    cy.contains('Try it').click()

    cy.wait('@json')

    cy.get('#result').should('have.text', '{}')
  })

  it('should use an empty body as the response for signature #2', () => {
    // cy.intercept(method, url, routeHandler?)
    cy.intercept('GET', '/todos/1', {}).as('json')

    cy.visit('/')

    cy.contains('Try it').click()

    cy.wait('@json')

    cy.get('#result').should('have.text', '{}')
  })

  it('should use an empty body as the response for signature #3', () => {
    // cy.intercept(routeMatcher, routeHandler?)
    cy.intercept({ method: 'GET', url: '/todos/1' }, {}).as('json')

    cy.visit('/')

    cy.contains('Try it').click()

    cy.wait('@json')

    cy.get('#result').should('have.text', '{}')
  })

  it('should use an empty body as the response for signature #4', () => {
    // cy.intercept(url, routeMatcher, routeHandler?)
    cy.intercept('/todos/1', { method: 'GET' }, {}).as('json')

    cy.visit('/')

    cy.contains('Try it').click()

    cy.wait('@json')

    cy.get('#result').should('have.text', '{}')
  })
})
