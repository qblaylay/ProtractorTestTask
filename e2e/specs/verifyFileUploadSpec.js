const { browser, logging } = require("protractor");
const path = require('path');
const FileUploaderPage = require("../pages/fileUploaderPage");

const fileToUpload = '../testData/paxful.png';

describe("Verify Uploaded File", () => {
    this.page = new FileUploaderPage();
    beforeEach(async () => {
        await this.page.setup();
    });

    it("Should file upload successfully", async () => {

        absolutePath = path.resolve(__dirname, fileToUpload);

        await (this.page.chooseFileButton).sendKeys(absolutePath);
        await this.page.click(this.page.uploadButton);
        expect(await this.page.isUploadedPageLoaded()).toBe(true);
        expect(await this.page.isUploadedFileExist()).toBe(true);
    })

}
)