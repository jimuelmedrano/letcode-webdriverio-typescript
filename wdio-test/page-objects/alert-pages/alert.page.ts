import Page from '../page.js';

class AlertPage extends Page {
   
    get firstSampleAlertButton(){ return $(`//button[@id='accept']`) };
    get secondSampleAlertButton(){ return $(`//button[@id='confirm']`) };
    get thirdSampleAlertButton(){ return $(`//button[@id='prompt']`) };
    get promptAlertMessage(){ return $(`//p[@id='myName']`) };

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

    //3. Input text in alert and accept
    async clickThirdSampleAlertButton(){
        const elmThirdSampleAlertButton = await this.thirdSampleAlertButton;
        await this.click(elmThirdSampleAlertButton);
    }

    async inputAlert(text){
        await browser.sendAlertText(text);
    }

    async verifyPromptAlertMessage(text){
        const elmPromptAlertMessage = await this.promptAlertMessage;
        await expect(elmPromptAlertMessage).toHaveTextContaining(text);
    }


}

export default new AlertPage();
