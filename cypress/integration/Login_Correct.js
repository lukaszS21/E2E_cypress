const url="http://qa2021.avsystem.cloud/login/v1"
describe("Login Test for correct data",()=> {
    context('Login Cypress Test', () => {
        it('Login scenario', () => {

            cy.visit(url)
            cy.get('input[name=login]').type('login')
            cy.get('input[name=password]').type(`password`)
            cy.get('button').click()
            cy.url().should('include', '/success')
            cy.get('h1').should('contain', 'Login successful')
        })
    })
})