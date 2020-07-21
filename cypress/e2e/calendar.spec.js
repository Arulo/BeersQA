/// <reference types="cypress" />

context('Calendar Components Tests', () => {
  beforeEach(() => {
    cy.visit('')
    cy.checkSiteIsUp()
  })

  describe('When the site loads', () => {
    it('Should display the calendar component', () => {
      cy.checkCalendarIsDisplayed()

    })
  })

  describe('When changing dates on the starting calendar', () => {
    it('Should display the newly set dates', () => {
      cy.checkMonthAndYearTextForCalendar(0, "SEPTEMBER", "2007")
      cy.changeMonthAndYearTextForCalendar(0, 2, 2010)
      cy.checkMonthAndYearTextForCalendar(0, "FEBRUARY", "2010")
      cy.changeMonthAndYearTextForCalendar(0, 8, 2015)
      cy.checkMonthAndYearTextForCalendar(0, "AUGUST", "2015")

    })
  })

  describe('When changing dates on the ending calendar', () => {
    it('Should display the newly set dates', () => {
      cy.checkMonthAndYearTextForCalendar(1, "DECEMBER", "2015")
      cy.changeMonthAndYearTextForCalendar(1, 9, 2013)
      cy.checkMonthAndYearTextForCalendar(1, "SEPTEMBER", "2013")
      cy.changeMonthAndYearTextForCalendar(1, 11, 2011)
      cy.checkMonthAndYearTextForCalendar(1, "NOVEMBER", "2011")

    })
  })

})
