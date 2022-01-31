/// <reference types="Cypress" />

//Commons POM import
const globalNav = require('../pages/commons/globalNav.js');
const globarBanner = require('../pages/commons/globalBanner.js');
//Blog page POM import
const blogPage = require('../pages/blog_page/blogPage.js');
//Insights page POM import
const insightsPage = require('../pages/insigths_page/insightsPage.js');

//Describe works as 'test suite'
describe('Blog page validation suite', function () {

    //Before each hook for home page navigation
    beforeEach(() => {
        //Navigation step
        cy.visit('https://blankfactor.com/')
        
    })

    //It work as 'Test cases' for this test suite
    it('Home page load - Vaildation', function () {

        //Assertion is used as dynamic wait to stabilize the click action
        globarBanner.elements.cookiesBannerAcceptBtn().should('be.visible').click({ force: true })
        //Clicking the insights option on the global nav
        globalNav.elements.insights().click()
        
        //Clicking on the go to blog option
        insightsPage.elements.goToBlogBtn().click()
        
        //Scrolling to place the article into view
        blogPage.elements.postFintechs().scrollIntoView()

        //======ASSERTIONS=======

        //Correct URL is in place
        cy.url().should('eq', 'https://blankfactor.com/insights/blog/')
        //Element is visible
        blogPage.elements.subscribeNewsBtn().should('be.visible')

    })

    it.only('Blog page load - validation', function () {

        //Assertion is used as dynamic wait to stabilize the click action
        globarBanner.elements.cookiesBannerAcceptBtn().should('be.visible').click({ force: true })
        //Clicking the insights option on the global nav
        cy.wait(4000)
        globalNav.elements.insights().click()
        //Clicking on the go to blog option
        cy.wait(4000)
        insightsPage.elements.goToBlogBtn().click()
        //Scrolling to place the article into view
        cy.wait(4000)
        blogPage.loadAllPosts('Why Fintech in Latin America Is Having a Boom')


        /*blogPage.elements.postFintechs().scrollIntoView()
        blogPage.elements.postTitles().contains()

        //======ASSERTIONS=======

        //Correct URL is in place
        cy.url().should('eq', 'https://blankfactor.com/insights/blog/')
        //Element is visible
        blogPage.elements.subscribeNewsBtn().should('be.visible')
        blogPage.elements.emailSubcriptionInput().clear().type('pruebacuenta9292@gmail.com')
        blogPage.elements.subscribeNewsBtn().click()
        blogPage.elements.subcriptionSuccessText().should('be.visible')*/

    })

    it('Subscription to newsletter - validation', function () {

    })

})
