import Page from '../page.js';

class InputFullName extends Page {
   

    get fullNameInput(){ return $(`//input[@id='fullName']`) };

    async inputFullName (firstName,lastName) {
        const elmFullNameInput = await this.fullNameInput;
        let fullName = firstName + ' ' + lastName;
        await this.inputText(elmFullNameInput,fullName);
        await browser.keys('Enter')
    }

    async verifyFullName(firstName,lastName){
        await browser.pause(5000);
        const elmFullNameInput = await this.fullNameInput;
        let fullName = firstName + ' ' + lastName;
        const elmText = await this.getInputValue(elmFullNameInput);
        await expect(elmText).toEqual(fullName);
    }
}

export default new InputFullName();
