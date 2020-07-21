const ELEMENTS = {    
    BEER_LIST_CONTAINER: "[data-testid=beers-list-container]",
    BEER_CARD: "[data-testid=beer-container]",
    BEER_IMAGE: "[data-testid=beer-container] img",
    BEER_NAME: "[data-testid=beer-container] h1",
    BEER_SUBHEADING: "[data-testid=beer-container] h2",
    BEER_COPY: "[data-testid=beer-container] p",
    BEER_BREWED_LABEL: "[data-testid=beer-container] label"
    
}



Cypress.Commands.add("checkNumberOfBeerCardsIs", (numberOfCards) => {
    cy.get(ELEMENTS.BEER_LIST_CONTAINER).should("be.visible")
    cy.get(ELEMENTS.BEER_CARD).should("have.length",numberOfCards)
})

Cypress.Commands.add("checkBeerCardsAreDisplayingCorrectly", (numberOfCards) => {
    cy.get(ELEMENTS.BEER_CARD).each(() => {
        cy.get(ELEMENTS.BEER_IMAGE).should("be.visible");
        cy.get(ELEMENTS.BEER_NAME).should("be.visible");
        cy.get(ELEMENTS.BEER_SUBHEADING).should("be.visible");
        cy.get(ELEMENTS.BEER_COPY).should("be.visible");
        cy.get(ELEMENTS.BEER_BREWED_LABEL).should("be.visible");
    
    })
})

