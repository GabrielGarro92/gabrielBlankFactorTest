# Steps to execute the framework

- execute 'npm i' on terminal
- execute 'npm run openCypress'
- Cypress runner should pop up
- Select 'smoke_blog_site.spec.js'
- Test should start running

# Notes

**Cypress project sctructure**

##Pages
Used for the POM related to the required pages

##Fixtures
It contains test files that will help to send dynamic data to the tests without hardcoding all the values into the test itselft.

##Support
Here you can find custom methods created for cypress by the automation engineers. The idea of this folder is to combine different page objects so the engineer can have more flexible ways to create complex workflows. Also the idea to keep complex methods here so we can maintain the integrity of each POM