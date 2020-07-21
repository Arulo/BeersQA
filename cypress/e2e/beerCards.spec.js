/// <reference types="cypress" />

context('Beer Cards Components Tests', () => {
  beforeEach(() => {
    cy.visit('')
    cy.checkSiteIsUp()
  })

  describe('When the user is on the first page', () => {
    it('Should display 3 beer cards', () => {
      cy.checkNumberOfBeerCardsIs(3)
      cy.checkBeerCardsAreDisplayingCorrectly()
    })
  })

  describe('When navigates through the middle pages', () => {
    it('Should display 3 beer cards', () => {
      let pagenum = 2
      for (pagenum = 2; pagenum <= 8 ; pagenum++) {
        cy.clickPaginationButton(pagenum)
        cy.checkNumberOfBeerCardsIs(3)
        cy.checkBeerCardsAreDisplayingCorrectly()
      }
    })

  })

  describe('When the user is on the last page', () => {
    it('Should display 1beer cards', () => {
      cy.clickPaginationButton(9)
      cy.checkNumberOfBeerCardsIs(1)
      cy.checkBeerCardsAreDisplayingCorrectly()
    })

  })

})
