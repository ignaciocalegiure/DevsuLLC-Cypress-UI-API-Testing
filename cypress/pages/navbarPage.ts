class NavBarPage {
    private navbarDiv: string = "#navbarExample"
    private homeButton: string = "Home ";
    private cartButton: string = "Cart";

    get homeButtonElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.navbarDiv).contains('a',this.homeButton);
    }

    get cartButtonElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.navbarDiv).contains('a',this.cartButton);
    }
}
export {NavBarPage};