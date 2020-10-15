const { ExpectedConditions, browser } = require("protractor");
const DynamicLoadingPage = require("../pages/dynamicLoadingPage");


describe("Verify Loaded Element Text", () => {
    this.page = new DynamicLoadingPage();
    beforeEach(async () => {
        await this.page.setup();
    });

    it("Should click example1 and verify loaded text", async () => {
        await this.page.click(this.page.example1Link);
        expect(await this.page.exampleHeader.getText()).toEqual("Example 1: Element on page that is hidden");
        await this.page.click(this.page.startButton);
        expect(await this.page.isLoadedElementExist()).toBe(true);

    });

    it("Should click example2 and verify loaded text", async () => {
        await this.page.click(this.page.example2Link);
        expect(await this.page.exampleHeader.getText()).toEqual("Example 2: Element rendered after the fact");
        await this.page.click(this.page.startButton);
        expect(await this.page.isLoadedElementExist()).toBe(true);

    });
})