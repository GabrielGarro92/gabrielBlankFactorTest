declare namespace Cypress {
    interface Chainable {
        /**
             * Custom command to open all posts so those can be attached to the DOM
             * @example cy.loadAllPosts()
             * @file //support/blogPageCommands.js
        */
         loadAllPosts(): void

        /**
             * Custom command to print all Title and link info for each post on blog page
             * @example cy.printPosts();
             * @file //support/blogPageCommands.js
        */
         printPosts(): void

    }
}