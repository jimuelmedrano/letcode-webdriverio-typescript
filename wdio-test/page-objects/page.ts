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

    async clickAndHold(element: WebdriverIO.Element,duration: number){
        //wait for the element to be clickable before interacting
        await element.waitForClickable({timeout: parseInt(this.elmTimeout)});
        //use browser action to point the mouse to element, click and hold
        await browser.action('pointer')
        .move({ duration: 0, origin:element })
        .down({ button: 0 }) // left button
        .pause(duration)
        .up({ button: 0 })
        .perform()
    }

    async inputText(element: WebdriverIO.Element, text: string){
        //wait for the element to be clickable before interacting
        await element.waitForDisplayed({timeout: parseInt(this.elmTimeout)});
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

    async dragAndDropElm(draggable: WebdriverIO.Element,droppable: WebdriverIO.Element){
        //drag and drop the draggable element to droppable element
        await browser.action('pointer')
        .move({ duration: 0, origin: draggable})
        .down({ button: 0 }) // left button
        .pause(500)
        .move({ duration: 0, origin: droppable })
        .up({ button: 0 })
        .perform()
    }

    randomString(length) {
        let result           = '';
        let characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
        let charactersLength = characters.length;
        for ( let i = 0; i < length; i++ ) {
          result += characters.charAt(Math.floor(Math.random() * 
     charactersLength));
       }
       return result;
    }

    async getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive. ex. random 1-3 is 1 min, max 4
    }
}
