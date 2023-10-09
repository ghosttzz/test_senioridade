import loc from '../../support/locators.ts';
describe('UI Test', () => {

    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/')
    })

    it('Validating A to Z', function () {
        cy.fixture('Data/uiTestData.json').as('login').then(() => {

            cy.get(loc.LOGIN.USER).type(this.login.user)

            cy.get(loc.LOGIN.PASSWORD).type(this.login.password)


            cy.get(loc.LOGIN.LOGIN_BUTTON).click()

            cy.wait(2000)


            cy.get('[data-test="product_sort_container"]').should('contain', 'Name (A to Z)').should('have.value', 'az')

            cy.get('[class="inventory_item"]').first().should('contain', 'Sauce Labs Backpack')

            cy.get('[class="inventory_item"]').last().should('contain', 'Test.allTheThings() T-Shirt (Red)')
        })

    })

    it('Validating Z to A', function () {
        cy.fixture('Data/uiTestData.json').as('login').then(() => {
       
            cy.get(loc.LOGIN.USER).type(this.login.user)

            cy.get(loc.LOGIN.PASSWORD).type(this.login.password)


            cy.get(loc.LOGIN.LOGIN_BUTTON).click()
            cy.wait(2000)

            cy.get('[data-test="product_sort_container"]').should('contain', 'Name (A to Z)').select('Name (Z to A)')

            cy.get('[class="inventory_item"]').first().should('contain', 'Test.allTheThings() T-Shirt (Red)')

            cy.get('[class="inventory_item"]').last().should('contain', 'Sauce Labs Backpack')

        })
    })
})