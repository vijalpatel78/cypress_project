function finishDropdown(){
    return cy.get('select#attribute2461');
} exports.finishDropdown = finishDropdown;

function shadeDropdown(){
    return cy.get('select#attribute1651');
} exports.shadeDropdown = shadeDropdown;

function quantityTextbox(){
    return cy.get('input#qty');
} exports.quantityTextbox = quantityTextbox;

function addToCartButton(){
    return cy.get('button#product-addtocart-button');
} exports.addToCartButton = addToCartButton;

function LEDBulbCheckbox(){
    return cy.get('input[name="lightbulb[0][id]"]');
} exports.LEDBulbCheckbox = LEDBulbCheckbox;

function popupCloseButton(){
    return cy.get('aside.modal-popup.modal-slide._show').find('button[data-role="closeBtn"]');
} exports.popupCloseButton = popupCloseButton;

function productName(){
    return cy.get('div.product-info-main').find('span[itemprop="name"]');
} exports.productName = productName;

function productDesignerName(){
    return cy.get('div.product-info-main').find('div[itemprop="designer"]');
} exports.productDesignerName = productDesignerName;

function collectionName(){
    return cy.get('div.product-info-main').find('div[itemprop="brand"]');
} exports.collectionName = collectionName;

function productPrice(){
    return cy.get('div.product-info-main').find('span[data-price-type="finalPrice"]').children('span.price').eq(0);
} exports.productPrice = productPrice;

function productCode(){
    return cy.get('div.product-info-main').find('div.product.attribute.sku').children('div[itemprop="sku"]').eq(0);
} exports.productCode = productCode;

function productAddedMsg(){
    return cy.get('div.page.messages').find('div[data-bind="html: $parent.prepareMessageForHtml(message.text)"]');
} exports.productAddedMsg = productAddedMsg;

function bulbQty(){
    return cy.get('div#lightbulbs-list').find('span.qty');
} exports.bulbQty = bulbQty;

function bulbPrice(){
    return cy.get('div#lightbulbs-list').find('span.price');
} exports.bulbPrice = bulbPrice;

