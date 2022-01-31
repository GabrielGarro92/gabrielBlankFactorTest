class blogPage {

    elements = {
        postFintechs: () => cy.get('.post-template__info a').contains('How fintechs can improve bias in machine learning'), // Accept button on banner related to cookies
        emailSubcriptionInput: () => cy.get('input[name="Email"]'),
        subscribeNewsBtn: () => cy.get('#form-newsletter-blog-submit-btn'),
        subcriptionSuccessText: () => cy.get('.form-newsletter div').contains('Thank you for subscribing! Stay tuned.'),
        postTitles: () => cy.get('.posts-list .post-title').find('a'),
        loadMoreBtn: ()  => cy.get('.btn-load-more'),
        resultsTxt: () => cy.get('.results')
    };

    loadAllPosts() {
        this.elements.loadMoreBtn().scrollIntoView()
        this.elements.postTitles().its('length').then(($currentPosts) => {
            let posts = $currentPosts
            this.elements.resultsTxt().then(($totalPosts) => {
                let text = $totalPosts.text()
                text = text.match(/\((.*)\)/);
                do{
                    this.elements.loadMoreBtn().click()
                    this.elements.loadMoreBtn().should('have.text', ' Load more  ')
                } while ( text[1] >= posts)
            })
        })
    }

}

module.exports = new blogPage();