import loc from '../../support/locators.ts';
describe('UI Test', () => {

    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/')
        cy.loginUi()
    })

    it('Validating A to Z', function () {
        cy.fixture('Data/uiTestData.json').as('info').then(() => {

            cy.wait(2000)


            cy.get(loc.SELETOR).should('contain', this.info.selectAtoZ).should('have.value', 'az')

            cy.get(loc.TELA_LISTAGEM).first().should('contain', this.info.first)

            cy.get(loc.TELA_LISTAGEM).last().should('contain', this.info.last)
        })

    })

    it('Validating Z to A', function () {
        cy.fixture('Data/uiTestData.json').as('info').then(() => {
    
            cy.wait(2000)

            cy.get(loc.SELETOR).should('contain', this.info.selectAtoZ).select(this.info.selectZtoA)

            cy.get(loc.TELA_LISTAGEM).first().should('contain', this.info.last)

            cy.get(loc.TELA_LISTAGEM).last().should('contain', this.info.first)

        })
    })
})