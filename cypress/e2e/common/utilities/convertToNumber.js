Cypress.Commands.add('convertPriceToNumber', (price) => {
    //remove extra chars and then return the price as a number
    let num = price.split('$');
    num = num[1].trim();
    num = num.replace(',','')
    return num;   
});
