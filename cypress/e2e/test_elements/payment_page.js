function paymentMethod(method){
    return cy.get('div.payment-method').find('span').contains(method,{matchCase:false});
} exports.paymentMethod = paymentMethod;

function cardName(){
    return cy.get('form#payfabric-form').find('input[name="payment[name_on_card]"]');
} exports.cardName = cardName;

function cardNumber(){
    return cy.get('form#payfabric-form').find('input[name="payment[cc_number]"]');
} exports.cardNumber = cardNumber;

function expirationMonth(){
    return cy.get('form#payfabric-form').find('select[name="payment[cc_exp_month]"]');
} exports.expirationMonth = expirationMonth;

function expirationYear(){
    return cy.get('form#payfabric-form').find('select[name="payment[cc_exp_year]"]');
} exports.expirationYear = expirationYear;

function cvv(){
    return cy.get('form#payfabric-form').find('input[name="payment[cc_cid]"]');
} exports.cvv = cvv;

function placeOrderButton(){
    return cy.get('button[type="submit"]').children('span').contains('Place Order',{matchCase:false});
} exports.placeOrderButton = placeOrderButton;
