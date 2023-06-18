Cypress.Commands.add('getLoginCredentials', (customerType) => {
    let email, password;
    if(customerType.toLowerCase() === 'retail'){
        email = Cypress.env(Cypress.env('testingEnvironment')).retailCustomerEmail;
        password = Cypress.env(Cypress.env('testingEnvironment')).retailCustomerPassword;
    }else if(customerType.toLowerCase() === 'trade'){
        email = Cypress.env(Cypress.env('testingEnvironment')).tradeCustomerEmail;
        password = Cypress.env(Cypress.env('testingEnvironment')).tradeCustomerPassword;
    }else if(customerType.toLowerCase() === 'wholesale'){
        email = Cypress.env(Cypress.env('testingEnvironment')).wholesaleCustomerEmail;
        password = Cypress.env(Cypress.env('testingEnvironment')).wholesaleCustomerPassword;
    }else{
        throw new Error('The provided \''+customerType+'\' customer type is not valid. It should be one of Retail, Trade or Wholesale.');
    }  
    return {email:email,password:password};
});
