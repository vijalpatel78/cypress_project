function shippingMethod(method){
    return cy.get('div#checkout-shipping-method-load').find('span').contains(method,{matchCase:false}).parents('tr.row.selected-method')
    .find('label[for="radio2"]');
} exports.shippingMethod = shippingMethod;

function continueToPaymentButton(){
    return cy.get('label.checkout-next-btn-label').find('span').contains('Continue to Payment',{matchCase:false});
} exports.continueToPaymentButton = continueToPaymentButton;