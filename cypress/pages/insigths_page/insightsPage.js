class insightsPage {

    elements = {
        goToBlogBtn: () => cy.get('.const-button').contains('Go to blog'), 
    };

}

module.exports = new insightsPage();