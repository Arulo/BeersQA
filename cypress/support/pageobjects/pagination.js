const ELEMENTS = {    
   PAGINATION_CONTAINER: '[data-testid="pagination-container"]',
   PAGINATION_BUTTON: '[data-testid="pagination-container"] button#',
   PAGINATION_ARROWS: '[data-name="Trazado 12"]',
}

Cypress.Commands.add("checkPaginationComponentIsDisplayed", () => {
   cy.get(ELEMENTS.PAGINATION_CONTAINER).should("be.visible")
})

Cypress.Commands.add("checkNumberOfPaginationArrows", (arrowNumber) => {
   cy.get(ELEMENTS.PAGINATION_ARROWS).should('have.length', arrowNumber)
})

Cypress.Commands.add("checkPaginationButtonIsDisplayed", (buttonNumber) => {
    cy.get(`${ELEMENTS.PAGINATION_BUTTON}${buttonNumber}`).should("be.visible");
})

Cypress.Commands.add("checkPaginationButtonIsNotDisplayed", (buttonNumber) => {
    cy.get(`${ELEMENTS.PAGINATION_BUTTON}${buttonNumber}`).should("not.be.visible");
})

Cypress.Commands.add("clickPaginationButton", (buttonNumber) => {
    cy.checkPaginationButtonIsDisplayed(buttonNumber).click();
})

