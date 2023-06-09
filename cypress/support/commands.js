
Cypress.Commands.add('login', (email, password) => {
    cy.visit('https://www.wykop.pl')
    cy.url().should("equal", "https://wykop.pl/")
    cy.get('.right > nav > ul > :nth-child(1) > a').click()
    cy.get(':nth-child(5) > .field > input').type('LukaszPB2023')
    cy.get('.form-group.password > .field > input').type('Lukasz2023')
    cy.get('.field > .button > .target').click()
    cy.get('.pm > [data-unread="0"]').should("be.visible")
  })