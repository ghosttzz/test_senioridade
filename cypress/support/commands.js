
// import loc from './locators'
import loc from './locators.ts'
Cypress.Commands.add("loginUi", (user = 'standard_user', password = "secret_sauce") => {
    cy.get(loc.LOGIN.USER).type(user)
    cy.get(loc.LOGIN.PASSWORD).type(password)
    cy.get(loc.LOGIN.LOGIN_BUTTON).click()
})