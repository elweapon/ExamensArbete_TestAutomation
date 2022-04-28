/// <reference types="cypress" />

import * as target from "../target/kogi.e-line"
import * as category from "../testFunctions/category"
import * as buyFlow from "../testFunctions/buyFlow"
import * as search from "../testFunctions/search"


describe('Kogi.se Test Suite', () => {

    beforeEach('Visit Kogi.se', () => {
        cy.visit(target.base_url)
    });

    it("Add To Cart Test Flow", () => {
        buyFlow.buyFlow(cy)
    });
    it("Search - Pizza", () => {
        search.goodCopSearch(cy)
    });
    it("Search - HTML-kod", () => {
        search.badCopSearch(cy)
    });
    it('Search - Long Search Term 2041', () => {
        search.LongSerchTerm(cy)
    });
    it("Category: Rostfri Inredning", () => {
        category.rostfri_inredning(cy)
    });
    it("Category: Beredning", () => {
        category.beredning(cy)
    });
    it("Category: Bryggning", () => {
        category.bryggning(cy)
    });
    it("Category: Diskrum", () => {
        category.diskrum(cy)
    });
    it("Category: kokning", () => {
        category.kokning(cy)
    });
    it("Category: Kyl & frys", () => {
        category.kyl_frys(cy)
    });
    it("Category: Steka & Grilla", () => {
        category.steka_grilla(cy)
    });
    it("Category: Varmhållning", () => {
        category.varmhallning(cy)
    });
    it("Category: Ugnar", () => {
        category.ugnar(cy)
    });
    it("Category: Tillbehör", () => {
        category.tillbehor(cy)
    });
    it("Category: Reservdelar", () => {
        category.reservdelar(cy)
    });
    it("Category: Leverantörer", () => {
        category.leverantorer(cy)
    });
});