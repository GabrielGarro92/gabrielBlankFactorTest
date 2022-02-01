class globalNav {

    elements = {
        insights: () => cy.get('.mega-menu-wrap span').contains('Insights'),  //Insights element on global nav
    };

    //Clicking on insights option in global nav
    clickInsightsOption() {
        cy.log('**=====Clicking on insight option in global nav=====**')
        this.elements.insights().click()
    }

}

module.exports = new globalNav();