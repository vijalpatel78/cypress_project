function thankYouText(){
    return cy.get('div.order-info__header').children('div.csp-page-title.thank').children('h1');
} exports.thankYouText = thankYouText;

/*function productName(){
    return cy.get('div.cart.table-wrapper').find('tr.item-info').find('div.product-item-details').children('strong.product.name.product-item-name');
} exports.productName = productName;

function collectionName(){
    return cy.get('div.cart.table-wrapper').find('tr.item-info').find('div.product-item-details').find('span.brand');
} exports.collectionName = collectionName;

function productCode(){
    return cy.get('div.cart.table-wrapper').find('tr.item-info').find('div.product-item-details').children('div.product-item-sku');
} exports.productCode = productCode;

function productOption(){
    return cy.get('div.cart.table-wrapper').find('tr.item-info').find('div.product-item-details').children('dl.item-options').find('dt');
} exports.productOption = productOption;

function productFinish(){
    return cy.get('div.cart.table-wrapper').find('tr.item-info').find('div.product-item-details').children('dl.item-options').children('dt')
    .contains('finish',{matchCase:false}).next('dd');
} exports.productFinish = productFinish;

function productShade(){
    return cy.get('div.cart.table-wrapper').find('tr.item-info').find('div.product-item-details').children('dl.item-options').children('dt')
    .contains('shade',{matchCase:false}).next('dd');
} exports.productShade = productShade;

function productPrice(){
    return cy.get('div.cart.table-wrapper').find('tr.item-info').children('td.col.price');
} exports.productPrice = productPrice;

function productQty(){
    return cy.get('div.cart.table-wrapper').find('tr.item-info').children('td.col.qty').children('span');
} exports.productQty = productQty;

function productSubtotal(){
    return cy.get('div.cart.table-wrapper').find('tr.item-info').children('td.col.subtotal').find('span.price');
} exports.productSubtotal = productSubtotal;

*/

function orderedProductList(){
    return cy.get('div.cart.table-wrapper').find('tbody.cart.item');
} exports.orderedProductList = orderedProductList;

function productName(index){
    return cy.get('div.cart.table-wrapper').find('tr.item-info').eq(index).find('div.product-item-details').children('strong.product.name.product-item-name');
} exports.productName = productName;

function collectionName(productName){
    return cy.get('div.cart.table-wrapper').find('tr.item-info').find('div.product-item-details').children('strong.product.name.product-item-name')
    .contains(productName,{matchCase:false}).parent('div.product-item-details').find('span.brand');
} exports.collectionName = collectionName;

function productCode(productName){
    return cy.get('div.cart.table-wrapper').find('tr.item-info').find('div.product-item-details').children('strong.product.name.product-item-name')
    .contains(productName,{matchCase:false}).parent('div.product-item-details').children('div.product-item-sku');
} exports.productCode = productCode;

function productOption(productName){
    return cy.get('div.cart.table-wrapper').find('tr.item-info').find('div.product-item-details').children('strong.product.name.product-item-name')
    .contains(productName,{matchCase:false}).parent('div.product-item-details').children('dl.item-options').find('dt');
} exports.productOption = productOption;

function productFinish(productName){
    return cy.get('div.cart.table-wrapper').find('tr.item-info').find('div.product-item-details').children('strong.product.name.product-item-name')
    .contains(productName,{matchCase:false}).parent('div.product-item-details').children('dl.item-options').children('dt')
    .contains('finish',{matchCase:false}).next('dd');
} exports.productFinish = productFinish;

function productShade(productName){
    return cy.get('div.cart.table-wrapper').find('tr.item-info').find('div.product-item-details').children('strong.product.name.product-item-name')
    .contains(productName,{matchCase:false}).parent('div.product-item-details').children('dl.item-options').children('dt')
    .contains('shade',{matchCase:false}).next('dd');
} exports.productShade = productShade;

function productPrice(productName){
    return cy.get('div.cart.table-wrapper').find('tr.item-info').find('div.product-item-details').children('strong.product.name.product-item-name')
    .contains(productName,{matchCase:false}).parents('tr.item-info').children('td.col.price');
} exports.productPrice = productPrice;

function productQty(productName){
    return cy.get('div.cart.table-wrapper').find('tr.item-info').find('div.product-item-details').children('strong.product.name.product-item-name')
    .contains(productName,{matchCase:false}).parents('tr.item-info').children('td.col.qty').children('span');
} exports.productQty = productQty;

function productSubtotal(productName){
    return cy.get('div.cart.table-wrapper').find('tr.item-info').find('div.product-item-details').children('strong.product.name.product-item-name')
    .contains(productName,{matchCase:false}).parents('tr.item-info').children('td.col.subtotal').find('span.price');
} exports.productSubtotal = productSubtotal;








