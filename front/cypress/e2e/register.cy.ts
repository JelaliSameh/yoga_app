/// <reference types="cypress" />
describe('register test', () => {
    beforeEach(() => {
    cy.visit('/register');
    });
  it('register succesfully a user', () => {
    
    cy.contains('Register').click()
    cy.intercept('POST', '/api/auth/register', {
      body: {
        lastName: "Coco",
        firstName: "Coco",
        email: "Coco3@coco.com",
        password: "test!1234"
      },
    })

    cy.get('input[formControlName="firstName"]').type('sam') // Add username
    cy.get('input[formControlName="lastName"]').type('test') // Add username
    cy.get('input[formControlName="email"]').type('sam@fakemail.fr') // Add email
    cy.get('input[formControlName="password"]').type('Coco') // Add password
    cy.get('button').click()
    cy.url().should('include', '/login')
  })
  it('register with user already registered', () => {
    
    cy.contains('Register').click()
    cy.intercept('POST', '/api/auth/register', {
      statusCode: 400,
      body: {
        lastName: "Coco",
        firstName: "Cocoo",
        email: "Coco3@coco.com",
        password: "test!1234"
      },
    })

    cy.get('input[formControlName="firstName"]').type('sam') // Add username
    cy.get('input[formControlName="lastName"]').type('test') // Add username
    cy.get('input[formControlName="email"]').type('sam@fakemail.fr') // Add email
    cy.get('input[formControlName="password"]').type('coco') // Add password
    cy.get('button').click()
    cy.contains('An error occurred') // Add error message
  })
});