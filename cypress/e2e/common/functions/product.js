const pdpElement = require('../../test_elements/product_details_page');
const checkoutSuccessPageElement = require('../../test_elements/checkout_success');
const pageHeaderElement = require('../../test_elements/common_elements');

let productDetails;

Cypress.Commands.add('enterProductDetails', (finish='',shade='',qty='',bulb='ignore') => {
    if(finish !== ''){
        pdpElement.finishDropdown().should('be.visible').scrollIntoView().select(finish);
    }
    if(shade !== ''){
        pdpElement.shadeDropdown().should('be.visible').scrollIntoView().select(shade);
    }
    if(qty !== ''){
        pdpElement.quantityTextbox().should('be.visible').clear().type(qty);
    }
    if(bulb !== 'ignore' && bulb.toLowerCase() === 'no'){
        pdpElement.LEDBulbCheckbox().click({force:true});
    }else if(bulb === 'ignore'){
        cy.log('Product does not have a bulb.');
    }
});

Cypress.Commands.add('collectProductDetails', (isBulb,isFinish,isShade,finish,shade,qty) => {
    productDetails = {}

    pdpElement.productName().then((name) => {
        productDetails.productName = name.text();
    });
    pdpElement.productCode().then((code) => {
        productDetails.productCode = code.text();
    });
    pdpElement.productPrice().then((price) => {
        productDetails.productPrice = price.text();
    });
    pdpElement.collectionName().then((collection) => {
        productDetails.collectionName = collection.text();
    });
    if(isFinish.toLowerCase() === 'yes'){
        productDetails.productFinish = finish;
    }
    if(isShade.toLowerCase() === 'yes'){
        productDetails.productShade = shade;
    }
    if(isBulb.toLowerCase() === 'yes'){
        pdpElement.bulbQty().then((qty) => {
            productDetails.bulbQty = qty.text();
        });
        pdpElement.bulbPrice().then((price) => {
            productDetails.bulbPrice = price.text();
        });
    }
    productDetails.quantity = Number(qty);
    cy.log('*******',productDetails);
});

Cypress.Commands.add('collectBulbName', (isBulb,productName) => {
    if(isBulb.toLowerCase() === 'yes'){
        pageHeaderElement.miniCartProductsList().then((list) =>{
            for(let i=0; i<list.length; i++){
                pageHeaderElement.miniCartProductName(i).then((name) => {
                    if(name.text().trim().toLowerCase() !== productName.toLowerCase()){
                        productDetails.bulbName = name.text();
                    }
                });
            }
        });
    }
    cy.log('*******',productDetails);
});

Cypress.Commands.add('validateOrderedProductDetails', () => {
    cy.log(productDetails);
    checkoutSuccessPageElement.orderedProductList().then((list) => {
        cy.log('*****1', list.length);
        for(let i=0; i<list.length; i++){
            checkoutSuccessPageElement.productName(i).then((name) => {
                cy.log('*****2', name.text(), productDetails.productName, productDetails.bulbName);
                if(name.text().trim().toLowerCase() === productDetails.productName.trim().toLowerCase()){
                    checkoutSuccessPageElement.collectionName(productDetails.productName.trim()).then((collection) => {
                        cy.log('*****3',collection.text(),productDetails.collectionName);
                        expect(collection.text().trim().toLowerCase()).to.equal(productDetails.collectionName.trim().toLowerCase());
                    });
                    checkoutSuccessPageElement.productCode(productDetails.productName.trim()).then((code) => {
                        cy.log('*****7',code.text(),productDetails.productCode)
                        expect(code.text().trim().replace('Item #:\n','').replace(/\s/g,'').toLowerCase()).to.equal(productDetails.productCode.trim().replace(/\s/g,'').toLowerCase());
                    });
                    checkoutSuccessPageElement.productOption(productDetails.productName.trim()).each(($el, index, $list) => {
                        let label = $el.text().toLowerCase().trim();
                        if(label === 'finish'){
                            checkoutSuccessPageElement.productFinish(productDetails.productName.trim()).then((finish) => {
                                cy.log('*****4',finish.text(),productDetails.productFinish);
                                expect(finish.text().trim().toLowerCase()).to.equal(productDetails.productFinish.trim().toLowerCase());
                            });
                        }else if(label === 'shade'){
                            checkoutSuccessPageElement.productShade(productDetails.productName.trim()).then((shade) => {
                                cy.log('*****5',shade.text(),productDetails.productShade)
                                expect(shade.text().trim().toLowerCase()).to.equal(productDetails.productShade.trim().toLowerCase());
                            });
                        }else{
                            throw new Error('The unknown '+label+' label name is found. It should be either \'Finish\' or \'Shade\'.');
                        }
                    });
                   
                    checkoutSuccessPageElement.productPrice(productDetails.productName.trim()).then((price) => {
                        cy.log('*****8',price.text(),productDetails.productPrice)
                        expect(price.text().trim()).to.equal(productDetails.productPrice.trim());
                    });
                    checkoutSuccessPageElement.productQty(productDetails.productName.trim()).then((qty) => {
                        cy.log('*****9',Number(qty.text().trim()),productDetails.quantity)
                        expect(Number(qty.text().trim())).to.equal(productDetails.quantity);
                    });
                    checkoutSuccessPageElement.productSubtotal(productDetails.productName.trim()).then((total) => {
                        //convert the displayed total price into the number
                        cy.convertPriceToNumber(total.text()).then((productSubtotal) => {
                            cy.convertPriceToNumber(productDetails.productPrice.trim()).then((productPrice) => {
                                //validate the displayed total price with the expected total price
                                cy.log('*****10',Number(productSubtotal),Number(productPrice)*productDetails.quantity)
                                expect(Number(productSubtotal)).to.equal(Number(productPrice)*productDetails.quantity);
                            });
                                
                        });
                    });
                }else if (name.text().trim().toLowerCase() === productDetails.bulbName.trim().toLowerCase()){
                    checkoutSuccessPageElement.productPrice(productDetails.bulbName.trim()).then((price) => {
                        cy.convertPriceToNumber(price.text()).then((bulbPrice) => {
                            cy.log('*****11',parseFloat(Number(bulbPrice)).toFixed(2),parseFloat(Number(productDetails.bulbPrice.replace('+ $',''))/Number(productDetails.bulbQty.replace('Qty: ',''))).toFixed(2));
                            expect(parseFloat(Number(bulbPrice)).toFixed(2)).to.equal(parseFloat(Number(productDetails.bulbPrice.replace('+ $',''))/Number(productDetails.bulbQty.replace('Qty: ',''))).toFixed(2));
                        });
                    });
                    checkoutSuccessPageElement.productQty(productDetails.bulbName.trim()).then((qty) => {
                        cy.log('*****12',Number(qty.text().trim()),Number(productDetails.bulbQty.replace('Qty: ',''))*productDetails.quantity)
                        expect(Number(qty.text().trim())).to.equal(Number(productDetails.bulbQty.replace('Qty: ',''))*productDetails.quantity);
                    });
                    checkoutSuccessPageElement.productSubtotal(productDetails.bulbName.trim()).then((total) => {
                        //convert the displayed total price into the number
                        cy.convertPriceToNumber(total.text()).then((bulbSubtotal) => {
                            cy.log('*****13',Number(bulbSubtotal),Number(productDetails.bulbPrice.replace('+ $',''))*productDetails.quantity);
                            expect(Number(bulbSubtotal)).to.equal(Number(productDetails.bulbPrice.replace('+ $',''))*productDetails.quantity);
                        });
                    });
                }else{
                    throw new Error('Unknown '+name.text()+' product found.');
                }
            });
        }
    });
});