describe('Training', () => {
  it('find content "type" and click', () => {
    cy.visit('https://example.cypress.io')

    cy.contains('type').click()

    //verify url
    cy.url().should('include','/commands/actions')

    //get an input, type into it
    cy.get('.action-email').type('fake@email.com')

    //verify value has been updated
    cy.get('.action-email').should('have.value','fake@email.com')
  })
})

