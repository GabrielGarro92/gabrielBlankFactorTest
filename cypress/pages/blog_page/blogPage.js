class blogPage {

    elements = {
        postTitles: () => cy.get('.posts-list .post-title').find('a'), //Gets all current the posts attached to the DOM
        loadMoreBtn: () => cy.get('.btn-load-more'), //Load more button element
        resultsTxt: () => cy.get('.results') //Results text element
    };

    //Click action to load more posts button
    clickLoadMoreBtn() {
        cy.log('**=====Clicking on \'load more\' post button=====**')
        this.elements.loadMoreBtn().click()
    }

    //Click action for any needed post
    //postTitle will be the post title value that will be used for clicking
    clickOnPostTitle(postTitle) {
        cy.log('**=====Clicking on post=====**')
        this.elements.postTitles().contains(postTitle).click()
    }

    //Scroll action for any needed post
    //postTitle will be the post title value that will be used for scrolling into viewport
    scrollToElement(postTitle){
        cy.log('**=====Scrolling into post=====**')
        this.elements.postTitles().contains(postTitle).scrollIntoView()
    }

}

module.exports = new blogPage();