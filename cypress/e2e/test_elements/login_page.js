function emailField(){
    return cy.get('input#email');
} exports.emailField = emailField;

function passwordField(){
    return cy.get('input#pass');
} exports.passwordField = passwordField;

function loginButton(){
    return cy.get('button#send2');
} exports.loginButton = loginButton;
