import {homePage} from "../../pages/homePage";
import {productPage} from "../../pages/productPage";
import {pofPage} from "../../pages/placeOrderFormPage";
import {cartPage} from "../../pages/cartPage";
import {twoProductSale} from '../model'

describe('end to end sales', () => {
    it('sale with two products', () => {
        homePage.visit();
        cy.fixture('twoProductSale').then((sale:twoProductSale) => {
            let firstTime : boolean = true;
            sale.products.forEach(function(product) {
                homePage.cardListElements.should("exist").and("be.visible");
                if (firstTime) {
                    homePage.nextButtonElement.focus().click();
                    firstTime = false;
                }
                homePage.cardByTitleElement(product.title).click();
                productPage.productTitleElement.should("have.text",product.title);
                productPage.priceElement.should("have.text",product.priceComplete);
                productPage.productDescriptionElement.should("have.text",product.description);
                productPage.productImageElement.should("have.attr","src",product.image);
                productPage.addToCartButtonElement.click();
                cy.on("window:confirm",(message)=> {
                    expect(message).to.be.equal(productPage.successMessageText);
                    true;
                });
                productPage.homeButtonElement.click();
            });
            homePage.cartButtonElement.click();
            cartPage.totalPriceElement.should("have.text",sale.totalPrice);
            for (let count:  number = 0; count < sale.products.length; count ++ ) {
                cartPage.productInCartListElement.eq(count).then((element) => {
                    for (let index:  number = 0; index < sale.products.length; index ++ ) {
                        cy.wrap(element).find("td").eq(1).then((td)=>{
                            if (td.text().match(sale.products[index].title)){
                                cy.wrap(element).contains(sale.products[index].title).should("exist");
                                cy.wrap(element).contains(sale.products[index].price).should("exist");
                                cy.wrap(element).find("img").should("exist").and("have.attr","src",sale.products[index].image);
                            }
                        })
                    }
                })
            }
            cartPage.totalPriceElement.should("have.text",sale.totalPrice);
            cartPage.placeOrderButtonElement.click();
            pofPage.titleHeaderElement.should("have.text",pofPage.getTitleText);
            pofPage.nameInputElement.focus().type(sale.name, {force: true});
            pofPage.countryInputElement.focus().type(sale.country);
            pofPage.cityInputElement.focus().type(sale.city);
            pofPage.creditCardInputElement.focus().type(sale.card);
            pofPage.monthInputElement.focus().type(sale.month);
            pofPage.yearInputElement.focus().type(sale.year);
            pofPage.purchaseButtonElement.focus().click();
            cy.wait(1000);
            pofPage.purchaseMessageElement.should("exist").and("have.text",pofPage.getPurchaseMessage);
            pofPage.purchaseTextDataElement.should("contain.text",sale.totalPrice).and("contain.text",sale.card).and("contain.text",sale.name);
            pofPage.confirmButtonElement.click();
        })
        
    });
});