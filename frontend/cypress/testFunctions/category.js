/// <reference types="cypress"/>

// Assertion on site Header
const headerText = '.list_info > h1'
const navTreeText = '.breadtrail'

// Main Category
const Rostfri_inredning = '#NavTree-Horisontell > ul > li:nth-child(1)'
const Beredning = '#NavTree-Horisontell > ul > li:nth-child(2)'
const Bryggning = '#NavTree-Horisontell > ul > li:nth-child(3)'
const Diskrum = '#NavTree-Horisontell > ul > li:nth-child(4)'
const Kokning = '#NavTree-Horisontell > ul > li:nth-child(5)'
const Kyl_frys = '#NavTree-Horisontell > ul > li:nth-child(6)'
const Steka_grilla = '#NavTree-Horisontell > ul > li:nth-child(7)'
const Varmhallning = '#NavTree-Horisontell > ul > li:nth-child(8)'
const Ugnar = '#NavTree-Horisontell > ul > li:nth-child(9)'
const Tillbehor = '#NavTree-Horisontell > ul > li:nth-child(10)'
const Reservdelar = '#NavTree-Horisontell > ul > li:nth-child(11)'
const Leverantorer = '#NavTree-Horisontell > ul > li:nth-child(12)'

// Sub Category
// Rostfri inredning
const Avstallning = ':nth-child(1) > .group-link > .group-title'
const Stativ = ':nth-child(2) > .group-link > .group-title'
const Underskap = ':nth-child(3) > .group-link > .group-title'

// Beredning
const Skarmaskiner = ':nth-child(1) > .group-link > .group-title'
const Potatisskalare = ':nth-child(2) > .group-link > .group-title'
const Gronsaksskarare = ':nth-child(3) > .group-link > .group-title'
const Snabbhackar = ':nth-child(4) > .group-link > .group-title'
const Blandmaskiner = ':nth-child(5) > .group-link > .group-title'
const Food_processor = ':nth-child(6) > .group-link > .group-title'
const Pastaberedning = ':nth-child(7) > .group-link > .group-title'
const Pizzaberedning = ':nth-child(8) > .group-link > .group-title'
const Vacmaskiner = ':nth-child(9) > .group-link > .group-title'
const ovrigt_beredning = ':nth-child(10) > .group-link > .group-title'

// Bryggning
const Kaffebryggare = ':nth-child(1) > .group-link > .group-title'

// Diskrum
const Diskmaskiner = ':nth-child(1) > .group-link > .group-title'

// Kokning
const Elspisar = ':nth-child(1) > .group-link > .group-title'
const Gasspisar = ':nth-child(2) > .group-link > .group-title'
const Pastakokerier = ':nth-child(3) > .group-link > .group-title'

// Kyl & frys
const Kylskap = ':nth-child(1) > .group-link > .group-title'
const Frysskap = ':nth-child(2) > .group-link > .group-title'
const Kyld_Arbetsbank = ':nth-child(3) > .group-link > .group-title'
const Grillkylbankar = ':nth-child(4) > .group-link > .group-title'
const Frysbankar = ':nth-child(5) > .group-link > .group-title'
const Pizzabankar = ':nth-child(6) > .group-link > .group-title'
const Kylrannor = ':nth-child(7) > .group-link > .group-title'
const Saladetter = ':nth-child(8) > .group-link > .group-title'
const Kylbufféer = ':nth-child(9) > .group-link > .group-title'
const Konditorimontrar = ':nth-child(10) > .group-link > .group-title'
const Blastchiller = ':nth-child(11) > .group-link > .group-title'
const Ismaskiner = ':nth-child(12) > .group-link > .group-title'
const Kylrum = ':nth-child(13) > .group-link > .group-title'
const Frysrum = ':nth-child(14) > .group-link > .group-title'

// Steka & grilla
const Stekbord_el = ':nth-child(1) > .group-link > .group-title'
const Stekbord_gas = ':nth-child(2) > .group-link > .group-title'
const Fritoser = ':nth-child(3) > .group-link > .group-title'
const Elgrillar = ':nth-child(4) > .group-link > .group-title'
const Gasgrillar = ':nth-child(5) > .group-link > .group-title'
const Klamgrillar = ':nth-child(6) > .group-link > .group-title'
const Kebabgrillar = ':nth-child(7) > .group-link > .group-title'
const Tippstekbord = ':nth-child(8) > .group-link > .group-title'
const Tillbehor_steka_grilla = ':nth-child(9) > .group-link > .group-title'

// Varmhallning
const Vattenbad = ':nth-child(1) > .group-link > .group-title'
const Varmebufféer = ':nth-child(2) > .group-link > .group-title'
const Pommes_varmeri = ':nth-child(3) > .group-link > .group-title'
const ovrigt = ':nth-child(4) > .group-link > .group-title'

// Ugnar
const Kombiugnar = ':nth-child(1) > .group-link > .group-title'
const Salamandrar = ':nth-child(2) > .group-link > .group-title'
const Bandugnar = ':nth-child(3) > .group-link > .group-title'
const Pizzaugnar = ':nth-child(4) > .group-link > .group-title'
const Microugnar = ':nth-child(5) > .group-link > .group-title'
const Tandooriugnar = ':nth-child(6) > .group-link > .group-title'

// Tillbehor
const Kantiner_rostfritt = ':nth-child(1) > .group-link > .group-title'
const Kantiner_plast = ':nth-child(2) > .group-link > .group-title'
const Kylbrickor = ':nth-child(3) > .group-link > .group-title'
const Vagnar = ':nth-child(4) > .group-link > .group-title'
const Tillbehor_pizza = ':nth-child(5) > .group-link > .group-title'

// Reservdelar
const Res_delar_Hallde = ':nth-child(1) > .group-link > .group-title'
const Res_delar_Pizzamaster = ':nth-child(2) > .group-link > .group-title'
const Res_delar_Potis = ':nth-child(3) > .group-link > .group-title'

// Brands - Leverantorer
const LOTUS = ':nth-child(1) > .group-link > .group-title'
const PIRON = ':nth-child(2) > .group-link > .group-title'
const ROBOT_COUPE = ':nth-child(3) > .group-link > .group-title'
const PIZZAMASTER = ':nth-child(4) > .group-link > .group-title'
const RATIONAL = ':nth-child(5) > .group-link > .group-title'
const FIMAR = ':nth-child(6) > .group-link > .group-title'
const HALLDE = ':nth-child(7) > .group-link > .group-title'
const FRIBERGS = ':nth-child(8) > .group-link > .group-title'
const WEXIODISK = ':nth-child(9) > .group-link > .group-title'
const LINCAT = ':nth-child(10) > .group-link > .group-title'
const VITO = ':nth-child(11) > .group-link > .group-title'
const SVEBA_DAHLEN = ':nth-child(12) > .group-link > .group-title'
const TURBOCHEF = ':nth-child(13) > .group-link > .group-title'
const AUTOFRY = ':nth-child(14) > .group-link > .group-title'
const ATA = ':nth-child(15) > .group-link > .group-title'
const STAFF_ICE = ':nth-child(16) > .group-link > .group-title'


//Function to test Category links
function rostfri_inredning(cy) {
    cy.get(Rostfri_inredning).click()
    cy.get(Avstallning).click()
    cy.get(headerText).invoke('text').should('eq', 'Avställning')
    

    cy.get(Rostfri_inredning).click()
    cy.get(Stativ).click()
    cy.get(headerText).invoke('text').should('eq', 'Stativ')

    cy.get(Rostfri_inredning).click()
    cy.get(Underskap).click()
    cy.get(headerText).invoke('text').should('eq', 'Underskåp')
}

function beredning(cy) {
    cy.get(Beredning).click()
    cy.get(Skarmaskiner).click()
    cy.get(headerText).invoke('text').should('eq', 'Skärmaskiner')

    cy.get(Beredning).click()
    cy.get(Potatisskalare).click()
    cy.get(headerText).invoke('text').should('eq', 'Potatisskalare')

    cy.get(Beredning).click()
    cy.get(Gronsaksskarare).click()
    cy.get(headerText).invoke('text').should('eq', 'Grönsaksskärare')

    cy.get(Beredning).click()
    cy.get(Snabbhackar).click()
    cy.get(headerText).invoke('text').should('eq', 'Snabbhackar')

    cy.get(Beredning).click()
    cy.get(Blandmaskiner).click()
    cy.get(headerText).invoke('text').should('eq', 'Blandningsmaskiner')

    cy.get(Beredning).click()
    cy.get(Food_processor).click()
    cy.get(headerText).invoke('text').should('eq', 'Food processor')

    cy.get(Beredning).click()
    cy.get(Pastaberedning).click()
    cy.get(headerText).invoke('text').should('eq', 'Pastaberedning')

    cy.get(Beredning).click()
    cy.get(Pizzaberedning).click()
    cy.get(headerText).invoke('text').should('eq', 'Pizzaberedning')

    cy.get(Beredning).click()
    cy.get(Vacmaskiner).click()
    cy.get(headerText).invoke('text').should('eq', 'Vacmaskiner')

    cy.get(Beredning).click()
    cy.get(ovrigt_beredning).click()
    cy.get(headerText).invoke('text').should('eq', 'Övr beredningstillbehör')
}
function bryggning(cy) {
    cy.get(Bryggning).click()
    cy.get(Kaffebryggare).click()
    cy.get(headerText).invoke('text').should('eq', 'Kaffebryggare')
}
function diskrum(cy) {
    cy.get(Diskrum).click()
    cy.get(Diskmaskiner).click()
    cy.get(headerText).invoke('text').should('eq', 'Diskmaskiner')
}

function kokning(cy) {
    cy.get(Kokning).click()
    cy.get(Elspisar).click()
    cy.get(headerText).invoke('text').should('eq', 'Elspisar')

    cy.get(Kokning).click()
    cy.get(Gasspisar).click()
    cy.get(headerText).invoke('text').should('eq', 'Gasspisar')

    cy.get(Kokning).click()
    cy.get(Pastakokerier).click()
    cy.get(headerText).invoke('text').should('eq', 'Pastakokerier')
}
function kyl_frys(cy) {
    cy.get(Kyl_frys).click()
    cy.get(Kylskap).click()
    cy.get(headerText).invoke('text').should('eq', 'Kylskåp')

    cy.get(Kyl_frys).click()
    cy.get(Frysskap).click()
    cy.get(headerText).invoke('text').should('eq', 'Frysskåp')

    cy.get(Kyl_frys).click()
    cy.get(Kyld_Arbetsbank).click()
    cy.get(headerText).invoke('text').should('eq', 'Kylbänkar')

    cy.get(Kyl_frys).click()
    cy.get(Grillkylbankar).click()
    cy.get(headerText).invoke('text').should('eq', 'Grillkylbänkar')

    cy.get(Kyl_frys).click()
    cy.get(Frysbankar).click()
    cy.get(headerText).invoke('text').should('eq', 'Frysbänkar')

    cy.get(Kyl_frys).click()
    cy.get(Pizzabankar).click()
    cy.get(headerText).invoke('text').should('eq', 'Pizzabänkar')

    cy.get(Kyl_frys).click()
    cy.get(Kylrannor).click()
    cy.get(headerText).invoke('text').should('eq', 'Kylrännor')

    cy.get(Kyl_frys).click()
    cy.get(Saladetter).click()
    cy.get(headerText).invoke('text').should('eq', 'Saladetter')

    cy.get(Kyl_frys).click()
    cy.get(Kylbufféer).click()
    cy.get(headerText).invoke('text').should('eq', 'Kylbufféer')

    cy.get(Kyl_frys).click()
    cy.get(Konditorimontrar).click()
    cy.get(headerText).invoke('text').should('eq', 'Konditorimontrar')

    cy.get(Kyl_frys).click()
    cy.get(Blastchiller).click()
    cy.get(headerText).invoke('text').should('eq', 'Blastchillers')

    cy.get(Kyl_frys).click()
    cy.get(Ismaskiner).click()
    cy.get(headerText).invoke('text').should('eq', 'Ismaskiner')

    cy.get(Kyl_frys).click()
    cy.get(Kylrum).click()
    cy.get(headerText).invoke('text').should('eq', 'Kylrum')

    cy.get(Kyl_frys).click()
    cy.get(Frysrum).click()
    cy.get(headerText).invoke('text').should('eq', 'Frysrum')
}
function steka_grilla(cy) {
    cy.get(Steka_grilla).click()
    cy.get(Stekbord_el).click()
    cy.get(headerText).invoke('text').should('eq', 'Stekbord el')

    cy.get(Steka_grilla).click()
    cy.get(Stekbord_gas).click()
    cy.get(headerText).invoke('text').should('eq', 'Stekbord gas')

    cy.get(Steka_grilla).click()
    cy.get(Fritoser).click()
    cy.get(headerText).invoke('text').should('eq', 'Fritöser')

    cy.get(Steka_grilla).click()
    cy.get(Elgrillar).click()
    cy.get(headerText).invoke('text').should('eq', 'Elgrillar')

    cy.get(Steka_grilla).click()
    cy.get(Gasgrillar).click()
    cy.get(headerText).invoke('text').should('eq', 'Gasgrillar')

    cy.get(Steka_grilla).click()
    cy.get(Klamgrillar).click()
    cy.get(headerText).invoke('text').should('eq', 'Klämgrillar')

    cy.get(Steka_grilla).click()
    cy.get(Kebabgrillar).click()
    cy.get(headerText).invoke('text').should('eq', 'Kebabgrillar')

    cy.get(Steka_grilla).click()
    cy.get(Tippstekbord).click()
    cy.get(headerText).invoke('text').should('eq', 'Tippstekbord')

    cy.get(Steka_grilla).click()
    cy.get(Tillbehor_steka_grilla).click()
    cy.get(headerText).invoke('text').should('eq', 'Tillbehör steka/grilla')
}
function varmhallning(cy) {
    cy.get(Varmhallning).click()
    cy.get(Vattenbad).click()
    cy.get(headerText).invoke('text').should('eq', 'Vattenbad')

    cy.get(Varmhallning).click()
    cy.get(Varmebufféer).click()
    cy.get(headerText).invoke('text').should('eq', 'Värmebufféer')

    cy.get(Varmhallning).click()
    cy.get(Pommes_varmeri).click()
    cy.get(headerText).invoke('text').should('eq', 'Pommes frites-värmeri')

    cy.get(Varmhallning).click()
    cy.get(ovrigt).click()
    cy.get(headerText).invoke('text').should('eq', 'Övrig varmhållning')
}
function ugnar(cy) {
    cy.get(Ugnar).click()
    cy.get(Kombiugnar).click()
    cy.get(headerText).invoke('text').should('eq', 'Kombiugnar')

    cy.get(Ugnar).click()
    cy.get(Salamandrar).click()
    cy.get(headerText).invoke('text').should('eq', 'Salamandrar')

    cy.get(Ugnar).click()
    cy.get(Bandugnar).click()
    cy.get(headerText).invoke('text').should('eq', 'Bandugnar')

    cy.get(Ugnar).click()
    cy.get(Pizzaugnar).click()
    cy.get(headerText).invoke('text').should('eq', 'Pizzaugnar')

    cy.get(Ugnar).click()
    cy.get(Microugnar).click()
    cy.get(headerText).invoke('text').should('eq', 'Microugnar')

    cy.get(Ugnar).click()
    cy.get(Tandooriugnar).click()
    cy.get(headerText).invoke('text').should('eq', 'Tandooriugnar')
}
function tillbehor(cy) {
    cy.get(Tillbehor).click()
    cy.get(Kantiner_rostfritt).click()
    cy.get(headerText).invoke('text').should('eq', 'Kantiner rostfritt')

    cy.get(Tillbehor).click()
    cy.get(Kantiner_plast).click()
    cy.get(headerText).invoke('text').should('eq', 'Kantiner plast')

    cy.get(Tillbehor).click()
    cy.get(Kylbrickor).click()
    cy.get(headerText).invoke('text').should('eq', 'Kylbrickor')

    cy.get(Tillbehor).click()
    cy.get(Vagnar).click()
    cy.get(headerText).invoke('text').should('eq', 'Vagnar')

    cy.get(Tillbehor).click()
    cy.get(Tillbehor_pizza).click()
    cy.get(headerText).invoke('text').should('eq', 'Tillbehör pizza')
}
function reservdelar(cy) {
    cy.get(Reservdelar).click()
    cy.get(Res_delar_Hallde).click()
    cy.get(headerText).invoke('text').should('eq', 'Res.delar Hällde')

    cy.get(Reservdelar).click()
    cy.get(Res_delar_Pizzamaster).click()
    cy.get(headerText).invoke('text').should('eq', 'Res.delar Pizzamaster')

    cy.get(Reservdelar).click()
    cy.get(Res_delar_Potis).click()
    cy.get(headerText).invoke('text').should('eq', 'Res.delar Potis')
}
function leverantorer(cy) {
    cy.get(Leverantorer).click()
    cy.get(LOTUS).click()
    cy.get(navTreeText).invoke('text').should('eq', 'LOTUS')

    cy.get(Leverantorer).click()
    cy.get(PIRON).click()
    cy.get(navTreeText).invoke('text').should('eq', 'PIRON')

    cy.get(Leverantorer).click()
    cy.get(ROBOT_COUPE).click()
    cy.get(navTreeText).invoke('text').should('eq', 'ROBOT COUPE')

    cy.get(Leverantorer).click()
    cy.get(PIZZAMASTER).click()
    cy.get(navTreeText).invoke('text').should('eq', 'PIZZAMASTER')

    cy.get(Leverantorer).click()
    cy.get(RATIONAL).click()
    cy.get(navTreeText).invoke('text').should('eq', 'RATIONAL')

    cy.get(Leverantorer).click()
    cy.get(FIMAR).click()
    cy.get(navTreeText).invoke('text').should('eq', 'FIMAR')

    cy.get(Leverantorer).click()
    cy.get(HALLDE).click()
    cy.get(navTreeText).invoke('text').should('eq', 'HÄLLDE')

    cy.get(Leverantorer).click()
    cy.get(FRIBERGS).click()
    cy.get(navTreeText).invoke('text').should('eq', 'FRIBERGS')

    cy.get(Leverantorer).click()
    cy.get(WEXIODISK).click()
    cy.get(navTreeText).invoke('text').should('eq', 'WEXIÖDISK')

    cy.get(Leverantorer).click()
    cy.get(LINCAT).click()
    cy.get(navTreeText).invoke('text').should('eq', 'LINCAT')

    cy.get(Leverantorer).click()
    cy.get(VITO).click()
    cy.get(navTreeText).invoke('text').should('eq', 'VITO')

    cy.get(Leverantorer).click()
    cy.get(SVEBA_DAHLEN).click()
    cy.get(navTreeText).invoke('text').should('eq', 'SVEBA-DAHLEN')

    cy.get(Leverantorer).click()
    cy.get(TURBOCHEF).click()
    cy.get(navTreeText).invoke('text').should('eq', 'TURBOCHEF')

    cy.get(Leverantorer).click()
    cy.get(AUTOFRY).click()
    cy.get(navTreeText).invoke('text').should('eq', 'AUTOFRY')

    cy.get(Leverantorer).click()
    cy.get(ATA).click()
    cy.get(navTreeText).invoke('text').should('eq', 'ATA')

    cy.get(Leverantorer).click()
    cy.get(STAFF_ICE).click()
    cy.get(navTreeText).invoke('text').should('eq', 'STAFF ICE')
}

module.exports = {
    rostfri_inredning,
    beredning,
    bryggning,
    diskrum,
    kokning,
    kyl_frys,
    steka_grilla,
    varmhallning,
    ugnar,
    tillbehor,
    reservdelar,
    leverantorer

}