class cookieBanner {

    elements = {
        cookiesBannerAcceptBtn: () => cy.get('#hs-eu-confirmation-button'), // Accept button on banner related to cookies
    };

    //Click method for the accept button within cookiesBanner
    clickAcceptCookiesBanner(){
        cy.log('**=====Accepting cookies disclaimer=====**')
        this.elements.cookiesBannerAcceptBtn().click({ force: true })
    }

}

module.exports = new cookieBanner();