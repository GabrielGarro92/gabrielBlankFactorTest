const basePage = require('../pages/blog_page/blogPage.js');

/*
    This method uses a recursive function to call itselft over and over until all posts are displayed
    An evaluation is made to see if the click action over the 'loadMoreBtn' should be performed or not. 
*/
Cypress.Commands.add("loadAllPosts", () => {
    //$currentPosts equals to the amount of Posts attached to the DOM in that moment
    basePage.elements.postTitles().its('length').then(($currentPosts) => {
        let posts = $currentPosts
        //$totalPosts equals to the number within parentesis in the results label
        basePage.elements.resultsTxt().then(($totalPosts) => {
            let text = $totalPosts.text()
            text = text.match(/\((.*)\)/)
            //It basically compares the number within parentesis in the results text with the amount of posts in the DOM 
            if (text[1] > posts) {
                basePage.clickLoadMoreBtn()
                basePage.elements.loadMoreBtn().should('not.have.class', 'disabled')
                cy.loadAllPosts()
            }
        })
    })
})


/*
    This method uses 'loadAllPosts' method to open all posts and then uses an async chain method to interact with the information for each post.
    This way it will get the post title and the post link
*/
Cypress.Commands.add("printPosts", () => {
    cy.loadAllPosts()
    //postTitles element will be iterated and each iteration will contain the required info
    basePage.elements.postTitles().each(($post) => {
        const postLink = $post.attr('href')
        //Printing into cypress runner
        cy.log('**=====Post information=====**')
        cy.log(`--Post title: ${$post.text()}`)
        cy.log(`--Post link: ${postLink}`)
    })
})