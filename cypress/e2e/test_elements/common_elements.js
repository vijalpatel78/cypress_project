//--------------------------- Menu --------------------------

function megaMenuName(menuName){
    return cy.get('ul#rw-menutop').children('li').children('a').contains(menuName,{matchCase:false});  
} exports.megaMenuName = megaMenuName;

function submenuName(menuName,submenuName){
    return cy.get('ul#rw-menutop').children('li').children('a').contains(menuName,{matchCase:false}).next('div.megamenu.fullmenu.clearfix.categoriesmenu')
    .find('div.title.cat-name').children('a').contains(submenuName,{matchCase:false});
} exports.submenuName = submenuName;

//------------------------ Country Popup ---------------------

function countryDropdown(){
    return cy.get('select#shop-country-options',{timeout:120000});  
} exports.countryDropdown = countryDropdown;

//---------------------- Login/Customer Icon ------------------

function loginIcon(){
    return cy.get('div.header-panel-right').find('li.link.authorization-link').children('a').contains('Login',{matchCase:false});
} exports.loginIcon = loginIcon;

function customerIcon(){
    return cy.get('div.header-panel-right').find('li.customer-welcome');
} exports.customerIcon = customerIcon;

//----------------------------- Logo -------------------------

function logo(){
    return cy.get('a.logo');
} exports.logo = logo;

//--------------------------- Search -------------------------

function searchTextbox(){
    return cy.get('input#search');
} exports.searchTextbox = searchTextbox;

function searchOption(searchOption){
    return cy.get('div.blm-autosuggest-search-results').children().find('a').contains(searchOption,{matchCase:false});
} exports.searchOption = searchOption;

//------------------------- Mini Cart -----------------------

function miniCart(){
    return cy.get('div.header-panel-right').children('div.minicart-wrapper').children('a.action.showcart');
} exports.miniCart = miniCart;

function beginCheckout(){
    return cy.get('div#minicart-content-wrapper').find('button#top-cart-btn-checkout');
} exports.beginCheckout = beginCheckout;

function cartCount(){
    return cy.get('span.counter-number');
} exports.cartCount = cartCount;

function cartProductName(){
    return cy.get('div.minicart-items-wrapper').children('ol#mini-cart').children('li[data-role="product-item"]')
    .eq(0).find('a[data-bind="attr: {href: product_url}, html: product_name"]');
} exports.cartProductName = cartProductName;

function cartProductPrice(productName){
    return cy.get('div.minicart-items-wrapper').children('ol#mini-cart').children('li[data-role="product-item"]')
    .find('a[data-bind="attr: {href: product_url}, html: product_name"]').contains(productName,{matchCase:false})
    .parents('div.product-item-details').find('span.minicart-price').find('span.price');
} exports.cartProductPrice = cartProductPrice;

function miniCartProductsList(){
    return cy.get('div.minicart-items-wrapper').children('ol#mini-cart').children('li[data-role="product-item"]');
} exports.miniCartProductsList = miniCartProductsList;

function miniCartProductName(index){
    return cy.get('div.minicart-items-wrapper').children('ol#mini-cart').children('li[data-role="product-item"]')
    .eq(index).find('a[data-bind="attr: {href: product_url}, html: product_name"]');
} exports.miniCartProductName = miniCartProductName;