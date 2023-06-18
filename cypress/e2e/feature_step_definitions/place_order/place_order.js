const { Given, When, Then } = require('@badeball/cypress-cucumber-preprocessor');
const pageHeaderElement = require('../../test_elements/common_elements');
const loginPageElement = require('../../test_elements/login_page');
const plpElement = require('../../test_elements/product_list_page');
const pdpElement = require('../../test_elements/product_details_page');
const shippingPageElement = require('../../test_elements/shipping_page');
const paymentPageElement = require('../../test_elements/payment_page');
const checkoutSuccessPageElement = require('../../test_elements/checkout_success');

let isBulb, isShade, isFinish, productName;

Given('the customer is on the home page', () => {
    //validate home page title
    cy.title().should('contain','Signature Designer Light Fixtures | Experience Visual Comfort & Co.');
});

When('the {string} customer do login into the website', (customerType) => {
    //click on the login icon
    pageHeaderElement.loginIcon().should('exist').click({force:true});
    //validate login page
    cy.title().should('contain','Login');

    //do login
    cy.getLoginCredentials(customerType).then((credentials) => {
        loginPageElement.emailField().should('be.visible').clear().type(credentials.email);
        loginPageElement.passwordField().should('be.visible').clear().type(credentials.password);
        loginPageElement.loginButton().should('be.enabled').click();
    });

    //validate customer icon
    pageHeaderElement.customerIcon().should('be.visible');
});

When('search {string} and select {string} search option', (searchText,option) => {
    //enter search text 
    pageHeaderElement.searchTextbox().clear().type(searchText);
    //click on the search option
    pageHeaderElement.searchOption(option).click({force:true});
    //validate search result text
    plpElement.pageTitle().should('contain.text',option.toLowerCase());
});

When('click on the {string} submenu of {string} mega menu', (subMenu,megaMenu) => {
    //mouse hover on the mega menu
    pageHeaderElement.megaMenuName(megaMenu).trigger('mouseover');
    //click on the sub menu
    pageHeaderElement.submenuName(megaMenu,subMenu).click({force: true});
    //validate page title
    plpElement.pageTitle().should('contain.text',subMenu);
});

When('click on the {string} product from the products list', (product) => {
    //click on the product name
    plpElement.productName(product).click({force:true});
    //validate pdp page title
    cy.title().should('contain',product);
    productName = product;
});

When('enter the following product details:', (dataTable) => {
    let finish, shade, qty=1, bulb;
    isBulb = 'no', isShade = 'no', isFinish = 'no';

    //get the product details
    for(let i=0; i<dataTable.rawTable.length; i++){
        if(dataTable.rawTable[i][0].toLowerCase() === 'finish'){
            finish = dataTable.rawTable[i][1];
            isFinish = 'yes';
        }else if(dataTable.rawTable[i][0].toLowerCase() === 'shade'){
            shade = dataTable.rawTable[i][1];
            isShade = 'yes'
        }else if(dataTable.rawTable[i][0].toLowerCase() === 'qty'){
            qty = dataTable.rawTable[i][1];
        }else if(dataTable.rawTable[i][0].toLowerCase() === 'bulb'){
            bulb = dataTable.rawTable[i][1];
            isBulb = bulb;
        }else{
            throw new Error('The provided \''+dataTable.rawTable[i][0]+'\' field is not valid. It should be one of Finish, Shade, Qty or Bulb.');
        }
    }

    //enter the details
    cy.enterProductDetails(finish,shade,qty,bulb);
    //collect the details
    cy.collectProductDetails(isBulb,isFinish,isShade,finish,shade,qty);
});

When('click on the add to cart button', () => {
    //click on the add to cart
    pdpElement.addToCartButton().click();
});

When('close the item added to cart popup in the case of no bulb', () => {
    //close the popup
    pdpElement.popupCloseButton().click({force:true});
});

When('click on the begin checkout button from the mini cart', () => {
    //wait till product added to cart
    pdpElement.productAddedMsg().should('be.visible');
    //mouse hover on the mini cart
    pageHeaderElement.miniCart().scrollIntoView();
    pageHeaderElement.miniCart().trigger('mouseover');
    cy.wait(1000)
    cy.collectBulbName(isBulb,productName);
    //click on the begin checkout button
    pageHeaderElement.beginCheckout().should('be.enabled').click();
    //validate page title
    cy.title().should('contain','Checkout');
    
});

When('select {string} shipping method', (method) => {
    shippingPageElement.shippingMethod(method).scrollIntoView().click({force:true});
});

When('click on the continue to payment button', () => {
    shippingPageElement.continueToPaymentButton().click();
    cy.url().should('contain','payment');

});

When('select {string} payment method', (method) => {
    paymentPageElement.paymentMethod(method).scrollIntoView().click({force:true});
});

When('enter the following credit or debit card details:', (dataTable) => {
    //get and enter the card details 
    for(let i=0; i<dataTable.rawTable.length; i++){
        if(dataTable.rawTable[i][0].toLowerCase() === 'name'){
            paymentPageElement.cardName().should('be.visible').clear().type(dataTable.rawTable[i][1]);
        }else if(dataTable.rawTable[i][0].toLowerCase() === 'card number'){
            paymentPageElement.cardNumber().should('be.visible').clear().type(dataTable.rawTable[i][1]);
        }else if(dataTable.rawTable[i][0].toLowerCase() === 'expiration month'){
            paymentPageElement.expirationMonth().should('be.visible').select(dataTable.rawTable[i][1]);
        }else if(dataTable.rawTable[i][0].toLowerCase() === 'expiration year'){
            paymentPageElement.expirationYear().should('be.visible').select(dataTable.rawTable[i][1]);
        }else if(dataTable.rawTable[i][0].toLowerCase() === 'cvv'){
            paymentPageElement.cvv().should('be.visible').clear().type(dataTable.rawTable[i][1]);
        }else{
            throw new Error('The provided \''+dataTable.rawTable[i][0]+'\' field is not valid. It should be one of Name, Card Number, Expiration Month, Expiration Year or CVV.');
        }
    }
});

When('click on the place order button', () => {
    paymentPageElement.placeOrderButton().should('be.visible').click();
});

Then('the order of product should get placed with {string} message', (msg) => {
    checkoutSuccessPageElement.thankYouText().should('have.text',msg);
    cy.validateOrderedProductDetails();
});
