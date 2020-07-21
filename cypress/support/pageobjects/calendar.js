const ELEMENTS = {    
    CALENDAR_CONTAINER: '[data-testid="brewed-between-container"]',
    CALENDAR_MONTH_YEAR_CONTAINER: '[data-testid="calendar-month-year-view-container"]',
    EXPANDED_CALENDAR_MONTH_BUTTON: '[data-testid="calendar-month-year-selection-container"] div:nth-of-type(1) button',
    EXPANDED_CALENDAR_YEAR_BUTTON: '[data-testid="calendar-month-year-selection-container"] div:nth-of-type(2) button',
    EXPANDED_CALENDAR_SUBMIT_BUTTON: '[data-testid="calendar-month-year-selection-check-button"]'
    
}



Cypress.Commands.add("checkCalendarIsDisplayed", () => {
    cy.get(ELEMENTS.CALENDAR_CONTAINER).should("be.visible")
    cy.get(ELEMENTS.CALENDAR_MONTH_YEAR_CONTAINER).should("have.length", 2)

})

Cypress.Commands.add("checkMonthAndYearTextForCalendar", (calendar, month, year) => {
    //Get the calendar index as if it was an array using the "calendar" argument and reads the text contents from it using the "month" and "year" arguments. both should be type string
    cy.get(ELEMENTS.CALENDAR_MONTH_YEAR_CONTAINER).eq(calendar).should("contain.text", month).should("contain.text", year)
})


Cypress.Commands.add("changeMonthAndYearTextForCalendar", (calendar, monthNumber, year) => {
    //Get the calendar index as if it was an array using the "calendar" argument and clicks it
    cy.get(ELEMENTS.CALENDAR_MONTH_YEAR_CONTAINER).eq(calendar).click()
    //Clicks on the different buttons to set the dates using the "monthNumber" and "year" arguments. both as type integers as they will create the right element id
    cy.get(`${ELEMENTS.EXPANDED_CALENDAR_MONTH_BUTTON}#${monthNumber}`).should('be.visible').click()
    cy.get(`${ELEMENTS.EXPANDED_CALENDAR_YEAR_BUTTON}#${year}`).should('be.visible').click()
    cy.get(ELEMENTS.EXPANDED_CALENDAR_SUBMIT_BUTTON).should('be.visible').click();

    
})


