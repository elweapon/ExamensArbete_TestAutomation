/// <reference types="cypress" />

// Page Buttons Elements
const tillbehor = ':nth-child(10) > div > a'
const tillbehorPizza = ':nth-child(5) > .group-link > .group-title'
const pizzaShovel = '#ctl00_MainContent_view_WindowView_ProductName-4 > .itemnamelink'
const buy = '#buy_0'
const cart = '#CartHeader'
const checkOut = '#CartControl_toCart'
const emptyCart = '#MainContent_Basket_EmptyCartButton'
const emptyCart_Yes = '[style="width:auto;height:auto;overflow: auto;position:relative;"] > .btn-group > .fw-button-primary'

// Page Elements Assertions
const element_headerText = '#StartTextView > h1'
const element_ProdName = '#ctl00_MainContent_view_WindowView_ProductName-4 > .itemnamelink'
const element_ProdNamePage = '#MainContent_ProductName > .title'
const element_ProdAdded = '#AddedText'
const element_ProdCartName = '.ArtName > a'
const element_CartPage = '#MainContent_Basket_cartUpdatePanel > .section-header > .title'
const element_EmptyCarty = '[style="width:auto;height:auto;overflow: auto;position:relative;"] > :nth-child(1) > span'
const element_CartIsEmpty = '#MainContent_Basket_MessageCartEmpty'

// Page Text Assertions
const text_StartPage = 'Välkommen till vår e-handel'
const text_ProdName = 'Pizzaspade trä 320x430 mm'
const text_ProdAdded = 'Produkten har lagts i din varukorg'
const text_CartName = 'Varukorg'
const text_emptyCart = 'Vill du tömma varukorgen?'
const text_CartIsEmpty = 'Du har inga varor i din varukorg!'

// Add to Cart Test Flow
export function buyFlow(cy) {
    cy.get(element_headerText).invoke('text').should('eq', text_StartPage)
    cy.get(tillbehor).click()
    cy.get(tillbehorPizza).click()
    cy.get(element_ProdName).invoke('text').should('eq', text_ProdName)
    cy.get(pizzaShovel).click()
    cy.get(element_ProdNamePage).invoke('text').should('eq', text_ProdName)
    cy.get(buy).click()
    cy.get(element_ProdAdded).invoke('text').should('eq', text_ProdAdded)
    // Wait time to let the "pop-up" dissapear before tyring to find cart button
    cy.wait(5000)
    cy.get(cart).click()
    cy.get(element_ProdCartName).invoke('text').should('eq', text_ProdName)
    cy.get(checkOut).click()
    cy.get(element_CartPage).invoke('text').should('eq', text_CartName)
    cy.get(emptyCart).click()
    cy.get(element_EmptyCarty).invoke('text').should('eq', text_emptyCart)
    cy.get(emptyCart_Yes).click()
    cy.get(element_CartIsEmpty).invoke('text').should('eq', text_CartIsEmpty)
}