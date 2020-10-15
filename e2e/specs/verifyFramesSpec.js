
const NestedFramesPage = require("../pages/nestedFramesPage")


describe("Verify Frames Text", () => {
    this.page = new NestedFramesPage();
    beforeAll(async () => {
        await this.page.setup();
    });

    it("Should display left frame", async () => {
        browser.switchTo().frame(0);
        browser.switchTo().frame(0);
        expect(await this.page.getFrameText()).toEqual("LEFT");
    });

    it("Should display middle frame", async () => {
        browser.switchTo().defaultContent();
        browser.switchTo().frame(0);
        browser.switchTo().frame(1);

        expect(await this.page.getFrameText()).toEqual("MIDDLE");
    });

    it("Should display right frame", async () => {
        browser.switchTo().defaultContent();
        browser.switchTo().frame(0);
        browser.switchTo().frame(2);

        expect(await this.page.getFrameText()).toEqual("RIGHT");
    });

    it("Should display bottom frame", async () => {
        browser.switchTo().defaultContent();
        browser.switchTo().frame(1);
        expect(await this.page.getFrameText()).toEqual("BOTTOM");
    });
});