import Page from '../page.js';

class AlertPage extends Page {
   
    get firstSampleAlertButton(){ return $(`//button[@id='accept']`) };
    get secondSampleAlertButton(){ return $(`//button[@id='confirm']`) };

    //1. Accept Alert
    async clickFirstSampleAlertButton(){
        const elmFirstSampleAlertButton = await this.firstSampleAlertButton;
        await this.click(elmFirstSampleAlertButton);
    }

    async acceptAlert(){
        await browser.acceptAlert();
    }

    //2. Dismiss and print alert
    async clickSecondSampleAlertButton(){
        const elmSecondSampleAlertButton = await this.secondSampleAlertButton;
        await this.click(elmSecondSampleAlertButton);
    }

    async printAlert(){
        console.log('Alert Text: ');
        console.log(await browser.getAlertText());
    }

    async dismissAlert(){
        await browser.dismissAlert();
    }

}

export default new AlertPage();
