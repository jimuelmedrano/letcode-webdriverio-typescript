import Page from '../page.js';

class WindowPage extends Page {
   
    get openHomeButton(){ return $(`//button[normalize-space()='Open Home Page']`) };


    async clickOpenHomeButton(){
        const elmOpenHomeButton = await this.openHomeButton;
        await this.click(elmOpenHomeButton);
    }

    async printNewWindowTitle(){
        const handles = await browser.getWindowHandles()
        await browser.switchToWindow(handles[0])
        console.log('WINDOW HANDLES:')
        console.log(await browser.getTitle())
        await browser.switchToWindow(handles[1])
        console.log(await browser.getTitle())
    }

}

export default new WindowPage();
