/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
export default class Page {
    /**
    * Opens a sub page of the page
    * @param path path of the sub page (e.g. /path/to/page.html)
    */
    elmTimeout = process.env.ELM_TIMEOUT;
    
    async open (path: string) {
        await browser.url(process.env.BASE_URL+path);
        await browser.maximizeWindow();
    }

    async click(element: WebdriverIO.Element){
        //wait for the element to be clickable before interacting
        await element.waitForClickable({timeout: parseInt(this.elmTimeout)});
        await element.click();
    }

    async inputText(element: WebdriverIO.Element, text: string){
        //wait for the element to be clickable before interacting
        await element.waitForClickable({timeout: parseInt(this.elmTimeout)});
        await element.setValue(text);
    }

    async getText(element: WebdriverIO.Element){
        //wait for the element to be clickable before interacting
        await element.waitForDisplayed({timeout: parseInt(this.elmTimeout)});
        const text = await element.getText();
        return text;
    }

    async getInputValue(element: WebdriverIO.Element){
        //wait for the element to be clickable before interacting
        await element.waitForDisplayed({timeout: parseInt(this.elmTimeout)});
        const text = await element.getValue();
        return text;
    }

    async verifyElement(element: WebdriverIO.Element){
        //wait for the element to be clickable before interacting
        await element.waitForExist({timeout: parseInt(this.elmTimeout)});
        await element.waitForDisplayed({timeout: parseInt(this.elmTimeout)});
        await element.waitForClickable({timeout: parseInt(this.elmTimeout)});
    }
}
