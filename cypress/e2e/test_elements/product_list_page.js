//--------------------------- Navigation Trail ---------------------

function navigationTrail(){
    return cy.get('div.breadcrumbs').children('ul').children('li').last().children('strong');
} exports.navigationTrail = navigationTrail;

//-------------------------- Product Result Text --------------------

function pageTitle(){
    return cy.get('div.page-title-wrapper').find('span.base');
} exports.pageTitle = pageTitle;

//----------------------------- Product ----------------------------

function productName(productName){
    return cy.get('div#amasty-shopby-product-list').find('div.product.details.product-item-details').find('a.product-item-link')
    .contains(productName,{matchCase:false}).scrollIntoView();
} exports.productName = productName;

function productPrice(productName){
    return cy.get('div#amasty-shopby-product-list').find('div.product.details.product-item-details').find('a.product-item-link')
    .contains(productName,{matchCase:false}).parents('div.product.details.product-item-details').find('span[data-price-type="finalPrice"]')
    .children('span.price');
} exports.productPrice = productPrice;