const element = require('../../test_elements/common_elements')

//run before all test cases
before(() => {
    //handle uncaught exceptions to make execution smooth
    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from failing the test
        return false;
    }); 
});

//run before each test case
beforeEach(() => {
    //open the link of given testing environment and select the country
    const testingEnvironment = Cypress.env('testingEnvironment');
    if(testingEnvironment.toLowerCase() === 'production'){
        cy.visit(Cypress.env('production').link);
        //element.countryDropdown().select(Cypress.env('production').country);
    }else if(testingEnvironment.toLowerCase() === 'staging'){
        cy.visit(Cypress.env('staging').link);
        //element.countryDropdown().select(Cypress.env('staging').country);
    }else{
        throw new Error('The provided \''+testingEnvironment+'\' testing environment is not valid. It should be either Production or Staging.');
    } 
});