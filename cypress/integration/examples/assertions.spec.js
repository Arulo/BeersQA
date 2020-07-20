/// <reference types="cypress" />

const { HOME_CONTAINER, BEER_LIST_CARD } = require("../../support/selectors")

context('The site is up and running', () => {
  beforeEach(() => {
    cy.visit('')
  })

  describe('When I visit the site', () => {
    it('Loads correctly', () => {
      cy.get(HOME_CONTAINER).should("be.visible")
      cy.get(`${BEER_LIST_CARD} > :nth-child(1)`).should("be.visible")
      cy.get(`${BEER_LIST_CARD} > :nth-child(2)`).should("be.visible")
      cy.get(`${BEER_LIST_CARD} > :nth-child(3)`).should("be.visible")
    })

  })

})
