"use strict";

const { browser, element } = require("protractor");
const BasePage = require("./basePage");

class FileUploaderPage extends BasePage {
    constructor() {
        super();
        this.url = '/upload';
        // Locator of Page Header
        this.uploadHeaderText = element(by.css("h3"));
        this.uploadedFileText = element(by.id("uploaded-files"));

        // Locator of Button on Upload Page
        this.chooseFileButton = element(by.id('file-upload'));
        this.uploadButton = element(by.id('file-submit'));

        // Locator of Uploaded File
        this.uploadedFileIsExist = this.textExistInPage(this.uploadedFileText, "paxful.png")

        // Check for Page is Loaded
        this.isPageLoaded = this.textExistInPage(this.uploadHeaderText, "File Uploader");
        this.isUploadedPageLoaded = this.textExistInPage(this.uploadHeaderText, "File Uploaded!")
    }

    async isUploadedFileExist() {
        return browser.wait(async () => {
            return await this.uploadedFileIsExist();
        })
    }
}
module.exports = FileUploaderPage;