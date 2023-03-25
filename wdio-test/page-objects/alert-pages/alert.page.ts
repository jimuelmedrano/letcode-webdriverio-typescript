import Page from '../page.js';

class AlertPage extends Page {
   
    get firstSampleAlertButton(){ return $(`//button[@id='accept']`) };

    async clickFirstSampleAlertButton(){
        const elmFirstSampleAlertButton = await this.firstSampleAlertButton;
        await this.click(elmFirstSampleAlertButton);
    }

    async acceptAlert(){
        await browser.acceptAlert();
    }

}

export default new AlertPage();
