const url="http://qa2021.avsystem.cloud/login/v1"
describe("Login Test for uncorrect data",()=>{
context('Login Cypress Test', () => {

    it('Go tu URL', () => {

        cy.visit(url)
    })
    it('Try to login', () => {
        cy.get('input[name=login]').type('loginn')
        cy.get('input[name=password]').type(`password{enter}`)
        // cy.get('button').click()

        cy.url().should('include', '/login/v1')
        })
    })
})