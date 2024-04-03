import { NavBarPage } from "./navbarPage";

class CartPage extends NavBarPage {
    
    private placeOrderButton: string = "button.btn-success";
    private productInCartList: string = "#tbodyid>tr";
    private totalPrice: string = "h3#totalp";

    get placeOrderButtonElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.placeOrderButton);
    }

    get totalPriceElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.totalPrice);
    }

    get productInCartListElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.productInCartList);
    }

}
export const cartPage = new CartPage();