class BasePage {

    async setup() {
        await browser.get(this.url);
        return await this.checkPageIsLoaded();
    }
    async checkPageIsLoaded() {
        return browser.wait(async () => {
            return await this.isPageLoaded();
        }, 5000, 'Failed while waiting for loading page. The expected page is: ' + this.url);
    }

    existInDom(locator) {
        return ExpectedConditions.presenceOf(locator);
    }

    textExistInPage(locator, text) {
        return protractor.ExpectedConditions.textToBePresentInElement(locator, text);
    }

    async click(locator) {
        await this.isClickable(locator);
        await locator.click();
    }

    isClickable(locator) {
        return protractor.ExpectedConditions.elementToBeClickable(locator);
    }
}

module.exports = BasePage;