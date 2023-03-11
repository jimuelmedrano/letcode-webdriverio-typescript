import Page from '../page.js';


class ButtonPage extends Page {

    get homeButton(){ return $(`//button[@id='home']`) };
   
    //1. Click Home Button
    async clickHomeButton () {
        const elmHomeButton = await this.homeButton;
        await this.click(elmHomeButton);
    }

    async verifyButtonPage () {
        const elmHomeButton = await this.homeButton;
        await this.verifyElement(elmHomeButton);
    }

}

export default new ButtonPage();
