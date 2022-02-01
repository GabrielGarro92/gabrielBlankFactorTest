/// <reference types="Cypress" />

//Importing base URLs
const baseUrls = require('../fixtures/baseUrls.json')
//Importing test information to be used on the test
const testInfo = require('../fixtures/testInfo.json')

//Commons POM import
const globalNav = require('../pages/commons/globalNav.js');
const globarBanner = require('../pages/commons/globalBanner.js');
//Blog page POM import
const blogPage = require('../pages/blog_page/blogPage.js');
const blogPageCommons = require('../pages/blog_page/commons/blogPageCommons.js');
//Insights page POM import
const insightsPage = require('../pages/insigths_page/insightsPage.js');

//Describe statement works as 'test suite'
describe('Blog page validation suite', function () {

    //Before each hook for home page navigation
    beforeEach(() => {
        //Navigation step to home page
        cy.visit(baseUrls.homePageUrl)

    })

    //It statement works as 'test case'
    it('Blog page - validation', function () {

        //Accepting cookies banner
        globarBanner.clickAcceptCookiesBanner()
        //Clicking the insights option on the global nav
        globalNav.clickInsightsOption()
        //Clicking on the go to blog option
        insightsPage.clickGoToBlogBtn()

        //Call to custom method for blog page in order to load all posts in the DOM
        cy.loadAllPosts()

        //Scrolling down to element based on the post provided
        blogPage.scrollToElement(testInfo.blogPostToOpen)
        //Click on post title based on the Title provided
        blogPage.clickOnPostTitle(testInfo.blogPostToOpen)


        //======ASSERTIONS=======
        cy.log('**=====Assertions=====**')

        //Correct URL is in place
        cy.url().should('eq', 'https://blankfactor.com/insights/blog/fintech-in-latin-america/')
        //Element is visible on page
        blogPageCommons.elements.subscribeNewsBtn().should('be.visible')

        //Submitting to an email subcription
        blogPageCommons.submitEmailSubscription(testInfo.subcriptionEmail)

        //Navigate back to the previous url
        cy.log('**=====Navigating to previous page=====**')
        cy.go('back')

        //This call the custom methods for blog page in order to print the title and link for all posts
        cy.printPosts()

    })

})
