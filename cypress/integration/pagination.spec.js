/// <reference types="cypress" />

context('Pagination Component Tests', () => {
  beforeEach(() => {
    cy.visit('')
  })

  describe('When interacting with the pagination arrows', () => {

    it('Should display one arrow button when on the first page', () => {
      cy.checkPaginationComponentIsDisplayed()

      cy.checkNumberOfPaginationArrows(1)

    })

    it('Should display two arrow buttons when on any of the middle pages', () => {
      cy.checkPaginationComponentIsDisplayed()

      cy.clickPaginationButton(2)
      cy.checkNumberOfPaginationArrows(2)
      cy.clickPaginationButton(3)
      cy.checkNumberOfPaginationArrows(2)
      cy.clickPaginationButton(4)
      cy.checkNumberOfPaginationArrows(2)
      cy.clickPaginationButton(5)
      cy.checkNumberOfPaginationArrows(2)
      cy.clickPaginationButton(6)
      cy.checkNumberOfPaginationArrows(2)
      cy.clickPaginationButton(7)
      cy.checkNumberOfPaginationArrows(2)
      cy.clickPaginationButton(8)
      cy.checkNumberOfPaginationArrows(2)

    })

    it('Should display one arrow button when on the last page', () => {
      cy.checkPaginationComponentIsDisplayed()

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
