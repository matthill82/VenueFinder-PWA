/* eslint-disable */

describe('PWA - Search', () => {

    it.skip('.should() - assert that <title> is correct', function () {
        // https://on.cypress.io/visit
        cy.visit('/')

        // Here we've made our first assertion using a '.should()' command.
        // An assertion is comprised of a chainer, subject, and optional value.

        cy.title().should('include', 'Search Spots')
    })

    it('should display coin not found', () => {
        cy.server()
        cy.fixture('foursquare.json').as('foursquare')
        cy.route('GET', '/search/*', '@foursquare')

        cy.visit('/search')
            .get('[data-selector=search-bar__input]')
            .type('Coffee')

        cy.get('[data-selector=search-bar__button]')
            .click()

        // TODO: HAndle allow geolocation

        cy.get('[data-selector=spot-table__item]', {timeout: 10000})
            .should('be.visible')
    })
})
