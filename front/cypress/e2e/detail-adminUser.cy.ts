/// <reference types="cypress" />
describe('detail session for admin user', () => {
    beforeEach(() => {
        // Visit the login page
        cy.visit('/login')
        // Intercept the login request
        cy.intercept('POST', '/api/auth/login', {
            body: {
            id: 2,
            username: 'userName',
            firstName: 'firstName',
            lastName: 'lastName',
            admin: true
            },
        })
        cy.intercept('GET', '/api/user/2', {
            body: {
            id: 2,
            username: 'userName',
            firstName: 'Sam',
            lastName: 'Admin',
            email: 'user@email.com',
            createdAt: '2024-09-01T00:00:00.000Z',
            updatedAt: '2024-09-01T00:00:00.000Z',
            admin: true
            },
            }).as('user')
    
        // Intercept the session request
        cy.intercept('GET', '/api/session', {
            body:[ {
              id: 2,
              name: "Sam admin",
              date: "2025-04-06T00:00:00.000+00:00",
              teacher_id: 2,
              description: "session yoga v2 v3",
              users: [1,3],
              createdAt: "2025-04-05T15:25:49",
              updatedAt: "2025-04-10T14:52:03"
            }],
            }).as('sessions')

            cy.intercept('GET', '/api/session/2', {
                body:{
                    id: 2,
                    name: "Sam admin",
                    date: "2025-04-06T00:00:00.000+00:00",
                    teacher_id: 2,
                    description: "session yoga v2 v3",
                    users: [1,3],
                    createdAt: "2025-04-05T15:25:49",
                    updatedAt: "2025-04-10T14:52:03"
                  },
                  }).as('session') 

            cy.intercept('GET', '/api/teacher/2', {
                body:{
                    id: 2,
                    lastName: "Admin",
                    firstName: "Sam",
                    createdAt: "2025-04-05T15:25:49",
                    updatedAt: "2025-04-10T14:52:03"
                },
                }).as('teacher') 
    
        cy.get('input[formControlName=email]').type("yoga@studio.com")
        cy.get('input[formControlName=password]').type(`${"test!1234"}{enter}{enter}`)
        cy.url().should('include', '/sessions')
        
    })
//Vérifier l'affichage de la page de détail
    it('should display the detail page', () => {
        cy.contains('Detail').click()
        cy.url().should('include', '/sessions/detail/2')
    })
    //Vérifier la navigation vers la liste des sessions
    it('should go back to the sessions page', () => {
        cy.contains('Detail').click()
        cy.get('button[mat-icon-button] mat-icon').contains('arrow_back').click();
        cy.url().should('include', '/sessions')
    })
  //Vérifier la suppression d'une session par un admin
    it('should delete the session if user is admin', () => {
        cy.intercept('DELETE', '/api/session/2', {
            statusCode: 200,
            body: {
                id: 2,
                name: "Sam admin",
                date: "2025-04-06T00:00:00.000+00:00",
                teacher_id: 2,
                description: "session yoga v2 v3",
                users: [2],
                createdAt: "2025-04-05T15:25:49",
                updatedAt: "2025-04-10T14:52:03"
              },
        }).as('delete')    


        cy.contains('Detail').click()
        cy.contains("delete").click()
        cy.url().should('include', '/sessions')
        
    })
})