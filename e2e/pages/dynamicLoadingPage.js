"use strict";

const { browser, element } = require("protractor");
const BasePage = require("./basePage");

class DynamicLoadingPage extends BasePage {
    constructor() {
        super();
        this.url = '/dynamic_loading';
        // Check for Page is Loaded
        this.isPageLoaded = this.textExistInPage(element(by.css("h3")), "Dynamically Loaded Page Elements");

        // Locator of Links
        this.example1Link = element(by.css('a[href*="/dynamic_loading/1"]'));
        this.example2Link = element(by.css('a[href*="/dynamic_loading/2"]'));

        // Locator of Buttons
        this.startButton = element(by.css("button"));

        // Locator of Page Header
        this.exampleHeader = element(by.xpath("//div[@id='content']/div/h4"));

        // Locator of Text in Page
        this.expectedLoadedElementText = element(by.css("#finish > h4"));
        this.loadedElementTextIsPresent = this.textExistInPage(this.expectedLoadedElementText, "Hello World!")
    }

    async isLoadedElementExist() {
        return browser.wait(async () => {
            return await this.loadedElementTextIsPresent();
        })
    }

}
module.exports = DynamicLoadingPage;