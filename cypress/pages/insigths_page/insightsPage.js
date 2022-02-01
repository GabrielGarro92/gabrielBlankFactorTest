class insightsPage {

    elements = {
        goToBlogBtn: () => cy.get('.const-button').contains('Go to blog'), //Go to blog button element
    };

    //Click action for goToBlogBtn
    clickGoToBlogBtn() {
        cy.log('**=====Clicking on \'Go to blog\' button=====**')
        this.elements.goToBlogBtn().click()
    }

}

module.exports = new insightsPage();