import { NavBarPage } from "./navbarPage";

class ProductPage extends NavBarPage {
    
    private productTitle: string = "h2";
    private price: string = "h3";
    private productDescription: string = "div#more-information>p";
    private productImage: string = "div#imgp img"
    private addToCartButton: string = "Add to cart";
    private successMessage: string = "Product added";
    

    get productTitleElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.productTitle);
    }

    get priceElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.price);
    }

    get productDescriptionElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.productDescription);
    }

    get addToCartButtonElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.contains('a',this.addToCartButton);
    }

    get productImageElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.productImage);
    }

    get successMessageText(): string {
        return this.successMessage;
    }
}
export const productPage = new ProductPage();