import { NavBarPage } from "./navbarPage";

class HomePage extends NavBarPage {
    private cardList: string = "#tbodyid";
    private nextButton: string = "#next2";
    private url: string = "index.html";
    

    get nextButtonElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.nextButton);
    }

    get cardListElements(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.cardList);
    }

    get getUrl(): string {
        return this.url;
    }

    cardByTitleElement(title: string): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.cardList).contains('a',title);
    }

    visit(): void {
        cy.visit(`/${this.url}`);
    }
}
export const homePage = new HomePage();