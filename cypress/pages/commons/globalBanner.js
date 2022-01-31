class cookieBanner {

    elements = {
        cookiesBannerAcceptBtn: () => cy.get('#hs-eu-confirmation-button'), // Accept button on banner related to cookies
    };

}

module.exports = new cookieBanner();