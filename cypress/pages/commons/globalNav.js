class globalNav {

    elements = {
        insights: () => cy.get('.mega-menu-wrap span').contains('Insights'), // cy.get('#HeaderOptions_Help') doesnt work for everything
    };

}

module.exports = new globalNav();