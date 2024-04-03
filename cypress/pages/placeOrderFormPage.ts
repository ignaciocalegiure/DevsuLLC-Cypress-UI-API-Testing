class PlaceOrderFormPage {
    private titleText: string = "Place order";
    private titleHeader: string = "div#orderModal h5";
    private totalPrice: string = "label#totalm";
    private nameInput: string = "input#name";
    private countryInput: string = "input#country";
    private cityInput: string = "input#city";
    private creditCardInput: string = "input#card";
    private monthInput: string = "input#month";
    private yearInput: string = "input#year";
    private purchaseButton: string =  "div#orderModal button.btn-primary";
    private purchaseMessage: string = "Thank you for your purchase!";
    private purchaseMessagePath: string = "div.sweet-alert>h2";
    private purchaseTextData: string = "div.sweet-alert>p";
    private confirmButton: string = "div.sweet-alert button.confirm";

    get titleHeaderElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.titleHeader);
    }

    get totalPriceElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.totalPrice);
    }

    get nameInputElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.nameInput);
    }

    get countryInputElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.countryInput);
    }

    get cityInputElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.cityInput);
    }

    get creditCardInputElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.creditCardInput);
    }

    get monthInputElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.monthInput);
    }

    get yearInputElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.yearInput);
    }
    
    get purchaseMessageElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.purchaseMessagePath);
    }

    get purchaseTextDataElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.purchaseTextData);
    }

    get purchaseButtonElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.purchaseButton);
    }

    get confirmButtonElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.confirmButton);
    }

    get getTitleText(): string {
        return this.titleText;
    }
    
    get getPurchaseMessage(): string {
        return this.purchaseMessage;
    }
}

export const pofPage = new PlaceOrderFormPage();