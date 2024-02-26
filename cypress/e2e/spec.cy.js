describe('Training', () => {
  it('find content "type" and click', () => {
    cy.visit('https://example.cypress.io')

    cy.contains('type').click()
  })
})

