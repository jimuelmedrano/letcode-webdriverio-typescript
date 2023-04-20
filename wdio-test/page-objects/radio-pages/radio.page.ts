import Page from '../page.js';

class RadioPage extends Page {

    get firstRadioOption(){ return $(`//input[@id='yes']`) };

    //1. select one radio option
    async selectFirstRadio(){
        const elmFirstRadioOption = await this.firstRadioOption;
        await this.click(elmFirstRadioOption);
    }

    async verifySelectedFirstRadio(){
        const elmFirstRadioOption = await this.firstRadioOption;
        const radioStatus = await elmFirstRadioOption.isSelected();
        console.log('First Radio Status: ' + radioStatus);

    }

}

export default new RadioPage();
