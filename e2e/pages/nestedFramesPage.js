"use strict";

const BasePage = require("./basePage");

class NestedFramesPage extends BasePage {
    constructor() {
        super();
        this.url = '/nested_frames';
        // Check for Page is Loaded
        this.isPageLoaded = this.existInDom(element(by.name("frame-top")));

        // Locator of Text
        this.body = element(by.tagName("body"));

    }

    async getFrameText() {
        return await this.body.getText();
    }

}
module.exports = NestedFramesPage;