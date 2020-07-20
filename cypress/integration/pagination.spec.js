/// <reference types="cypress" />

context('Pagination Component Tests', () => {
  beforeEach(() => {
    cy.visit('')
  })

  describe('When interacting with the pagination arrows', () => {
    it('Should display arrow buttons depending on available previous or next pages', () => {
      cy.checkPaginationComponentIsDisplayed()

      cy.checkNumberOfPaginationArrows(1)
      cy.clickPaginationButton(2)
      cy.checkNumberOfPaginationArrows(2)

      cy.clickPaginationButton(9)
      cy.checkNumberOfPaginationArrows(1)
    })

  })

  describe('When selecting different page numbers', () => {
    it('Should display the page numbers that are close to the currently selected page', () => {
      cy.checkPaginationComponentIsDisplayed()

      cy.clickPaginationButton(1)
      cy.checkPaginationButtonIsDisplayed(3)
      cy.checkPaginationButtonIsNotDisplayed(6)

      cy.clickPaginationButton(5)
      cy.checkPaginationButtonIsDisplayed(6)
      cy.checkPaginationButtonIsNotDisplayed(7)

      cy.clickPaginationButton(6)
      cy.checkPaginationButtonIsDisplayed(7)
      cy.checkPaginationButtonIsNotDisplayed(4)
    })

  })

})
