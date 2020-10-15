# Protractor UI Test Task

[![](https://www.perfecto.io/sites/perfecto/files/image/2019-06/protractor-and-perfecto-183.png)](https://www.protractortest.org/#/)

Protractor is an end-to-end test framework.

A sample project for Protractor test to execute the UI Test Automation.

# Project Structure
The directory structure of the sample project looks like the following.
```sh

\---e2e
|   +---pages
|   |   \---basePage
|   |   \---dynamicLoadingPage
|   |   \---fileUploaderPage
|   |   \---nestedFramesPage
|   +---specs
|   |   |   |---verifyFileUploadSpec
|   |   |   |---verifyFramesSpec
|   |   |   |---verifyPageLoadedSpec
|   +---testData
|---reports
|---conf.js
|---package.json
```

### Pre-requisite
- Install Node and NPM (Node Package Manager)
- Run the below command to install dependencies
    
```sh
    $ npm install
```

### Execute Tests
To execute the all test, just run the below command inside the project folder:
```sh
    $ npm test
```

### Reports
To display the reports, go to the reports and open the "report.html" file in your browser.

