class blogPageCommons {

    elements = {
        emailSubcriptionInput: () => cy.get('input[name="Email"]'), //this will get the input field for emaul subcription
        subscribeNewsBtn: () => cy.get('#form-newsletter-blog-submit-btn'), //this is related to subscription subtmit button
        subcriptionSuccessText: () => cy.get('.form-newsletter div').contains('Thank you for subscribing! Stay tuned.'), //success label when subcription for new is complete
    }

    //This method perform a subcription action by using a dynamic email and then clicking the submit button
    submitEmailSubscription(email) {
        cy.log('**=====Submitting email subscription=====**')
        this.elements.emailSubcriptionInput().clear().type(email)
        this.elements.subscribeNewsBtn().click()
    }

}

module.exports = new blogPageCommons();