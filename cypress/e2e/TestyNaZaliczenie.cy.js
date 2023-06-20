///<reference types="cypress" />
import googlePage from "../PageObject/googleMainPageObject";
const google = new googlePage();

describe('Navigate to Google.pl and assert', () => {

    beforeEach("Setup", () => {
        cy.visit('/')
        cy.url().should("contain", "google")
    });
    
    it('Click on "Zaakceptuj wszystko"', () => {
        //cy.get('#L2AGLb > .QS5gu').should('be.visible')
        //cy.get('#L2AGLb > .QS5gu').click()
        //cy.get('#L2AGLb > .QS5gu').should('not.be.visible')
        google.acceptCookies().should('be.visible')
        google.acceptCookies().click()
        google.acceptCookies().should('not.be.visible')
        cy.url().should("contain", "google")
    })

    it('Click on "Odrzuć wszystko"', () => {
        // cy.get('#W0wltc  > .QS5gu').should('be.visible')
        // cy.get('#W0wltc  > .QS5gu').click()
        // cy.get('#W0wltc  > .QS5gu').should('not.be.visible')
        google.deniedCookies().should('be.visible')
        google.deniedCookies().click()
        google.deniedCookies().should('not.be.visible')
        cy.url().should("contain", "google")
    })

    it('Click on "Prywatność"', () => {
        // cy.get('#RP3V5c').should('be.visible')
        // cy.get('#RP3V5c').click()
        google.prywatnoscCookies().should('be.visible')
        google.prywatnoscCookies().click()
        cy.url().should("contain", "policies.google.com/privacy")
    })

    it('Click on "Warunki"', () => {
        // cy.get('#HQ1lb').should('be.visible')
        // cy.get('#HQ1lb').click()
        google.warunkiCookies().should('be.visible')
        google.warunkiCookies().click()
        cy.url().should("contain", "policies.google.com/terms")
    })
})

describe('Navigate to Google.pl and search for "Otomoto.pl"', {tags: 'Otomoto'}, () => {

    beforeEach("Setup", () => {
        cy.visit('/')
        cy.url().should("contain", "google")
    });
    
    it('Search for Otomoto.pl and press Szukaj w google', () => {
        //cy.origin('https://www.google.com', () => {
        
        cy.get('#W0wltc  > .QS5gu').should('be.visible')
        cy.get('#W0wltc  > .QS5gu').click()
        cy.get('#W0wltc  > .QS5gu').should('not.be.visible')
        cy.url().should("contain", "google")
       //cy.get('#APjFqb').click()
        cy.get('#APjFqb').type('Otomoto').type('{enter}')
        //cy.solveGoogleReCAPTCHA()
        //cy.get('.tF2Cxc > .yuRUbf > a > .LC20lb').click()
        cy.url().should("contain", "https://www.google.pl/search?q=Otomoto")
    })

    it('Search for Otomoto.pl and select first link from search resoults', () => {
        cy.get('#W0wltc  > .QS5gu').should('be.visible')
        cy.get('#W0wltc  > .QS5gu').click()
        cy.get('#W0wltc  > .QS5gu').should('not.be.visible')
        cy.url().should("contain", "google")
        cy.get('#APjFqb').click()
        cy.get('#APjFqb').type('Otomoto').type('{enter}')
        cy.get('.tF2Cxc > .yuRUbf > a > .LC20lb').click()
        cy.url().should("contain", "otomoto")
        cy.get('#onetrust-accept-btn-handler').click()
        cy.url().should('equal','https://www.otomoto.pl/')
    })

})


describe('Navigate to Otomoto.pl and assert', {tags: 'Otomoto'}, () => {

    beforeEach("Setup", () => {
        cy.visit('http://www.otomoto.pl')
        cy.url().should("contain", "otomoto")
    });
    
    it('Click on "Akceptuj"', () => {
        cy.get('#onetrust-accept-btn-handler').should('be.visible')
        cy.get('#onetrust-accept-btn-handler').click()
        cy.get('#onetrust-accept-btn-handler').should('not.be.visible')
        cy.url().should("contain", "otomoto")
    })

    it('Click on "Pokaz cele"', () => {
        cy.get('#onetrust-pc-btn-handler').should('be.visible')
        cy.get('#onetrust-pc-btn-handler').click()
        cy.get('#onetrust-pc-btn-handler').should('not.be.visible')
        cy.url().should("contain", "otomoto")
    })

    it('Click on "Zezwolenie na wszystkie"', () => {
        cy.get('#onetrust-pc-btn-handler').click()
        cy.get('#accept-recommended-btn-handler').should('be.visible')
        cy.get('#accept-recommended-btn-handler').click()
        cy.get('#accept-recommended-btn-handler').should('not.be.visible')
        cy.url().should("contain", "otomoto")
    })

    it('Selecting a particullar policy and clicking on "Potwierdzenie moich wyborów"', () => {
        cy.get('#onetrust-pc-btn-handler').click()
        cy.get('#accept-recommended-btn-handler').should('be.visible')
        cy.get('div[data-optanongroupid="C0002"] > .ot-acc-hdr > .ot-tgl > .ot-switch > .ot-switch-nob').click()
        cy.get('div[data-optanongroupid="C0003"] > .ot-acc-hdr > .ot-tgl > .ot-switch > .ot-switch-nob').click()
        cy.get('div[data-optanongroupid="gad"] > .ot-acc-hdr > .ot-tgl > .ot-switch > .ot-switch-nob').click()
        cy.get('.save-preference-btn-handler').click()
        cy.url().should("contain", "otomoto")
    })
})

describe('Navigate to Otomoto.pl and search for "Porsche Taycan", takes a screenshot and goes througt the photos', {tags: 'Otomoto'}, () => {

    it('Click and select Porsche brand and Tycan as a model', () => {
        cy.visit('http://www.otomoto.pl')
        cy.url().should("contain", "otomoto")
        cy.get('#onetrust-accept-btn-handler').should('be.visible')
        cy.get('#onetrust-accept-btn-handler').click()
        cy.get('#onetrust-accept-btn-handler').should('not.be.visible')
        cy.get(':nth-child(2) > :nth-child(1) > [data-testid="dropdown"] > [data-testid="dropdown-head"] > [data-testid="dropdown-head-input"]').click()
        cy.get(':nth-child(2) > :nth-child(1) > [data-testid="dropdown"] > [data-testid="dropdown-head"] > [data-testid="dropdown-head-input"]').type('Porsche')
        cy.get('.ooa-micpln').click()
        cy.get(':nth-child(3) > :nth-child(1) > [data-testid="dropdown"] > [data-testid="dropdown-head"] > [data-testid="dropdown-head-input"]').click()
        cy.get(':nth-child(3) > :nth-child(1) > [data-testid="dropdown"] > [data-testid="dropdown-head"] > [data-testid="dropdown-head-input"]').type('Taycan')
        cy.get('.ooa-micpln').click()
        cy.get('[data-testid="submit-btn"] > .ooa-ucvp6h > .button-text-wrapper').click()
        cy.url().should("equal", "https://www.otomoto.pl/osobowe/porsche/taycan")
    })

    it('Order resoults by Highest price and click on the most expensive one', () => {
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
        })
        cy.visit('https://www.otomoto.pl/osobowe/porsche/taycan')
        cy.url().should("contain", "otomoto.pl/osobowe/porsche/taycan")
        cy.get('#onetrust-accept-btn-handler').should('be.visible')
        cy.get('#onetrust-accept-btn-handler').click()
        cy.get('#onetrust-accept-btn-handler').should('not.be.visible')
        cy.get('[data-testid="sorting-dropdown"] > [data-testid="dropdown-head"] > [data-testid="dropdown-head-button"]').click()
        cy.get(':nth-child(4) > .ooa-k3nz6w > .ooa-1ejcmi5 > [data-testid="dropdown-checkmark"]').click()
        cy.get('[data-id="6109434505"]').click()
        //Take a screen shot and save in Screenshot folder
        cy.screenshot()
        //Multiple click on Next button
        cy.get('.slick-next.navigator > .icon-arrow_right').click().wait(500)
        cy.get('.slick-next.navigator > .icon-arrow_right').click().wait(500)
        cy.get('.slick-next.navigator > .icon-arrow_right').click().wait(500)
        cy.get('.slick-next.navigator > .icon-arrow_right').click().wait(500)
        cy.get('.slick-next.navigator > .icon-arrow_right').click().wait(500)
        // for(let n = 0; n < 10; n ++){
        //     cy.get('.slick-next.navigator > .icon-arrow_right').click({multiple : true})
        //   }
    })
})
describe('Navigate to Wykop.pl and assert', () => {
        
    it('Login&Logoff to/from Wykop.pl', () => {

        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
        })

         cy.login()
    })

    it('Login and Search & Open "Pasta o serwerowni"', () => {

        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
        })

        cy.login()
        //cy.get('.pm > [data-unread="0"]').should("be.visible")
        cy.get('[type="search"]').click().type('Pasta o serwerowni')
        cy.get('.links > .content > ul > :nth-child(3) > a > span').click()
        cy.get('h2 > a').invoke('removeAttr', 'target').click()
    })
})
