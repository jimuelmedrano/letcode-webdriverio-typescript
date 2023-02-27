import Page from '../page.js';

class InputFullName extends Page {
   

    get fullNameInput(){ return $(`//input[@id='fullName']`) };
    get appendTextInput(){ return $(`//input[@id='join']`) };
    get getValueTextInput(){ return $(`//input[@id='getMe']`) };

    //1. Input Full Name Scenario
    async inputFullName (firstName,lastName) {
        const elmFullNameInput = await this.fullNameInput;
        let fullName = firstName + ' ' + lastName;
        await this.inputText(elmFullNameInput,fullName);
        await browser.keys('Enter')
    }

    async verifyFullName(firstName,lastName){
        const elmFullNameInput = await this.fullNameInput;
        let fullName = firstName + ' ' + lastName;
        const elmText = await this.getInputValue(elmFullNameInput);
        await expect(elmText).toEqual(fullName);
    }

    //2. Append Text Scenario
    async appendNewText (append) {
        const elmAppendTextInput = await this.appendTextInput;
        const currentText = await this.getInputValue(elmAppendTextInput);
        let newFullText = currentText + ' ' + append;
        await this.inputText(elmAppendTextInput,newFullText);
        await browser.keys('Tab')
    }

    async verifyNewText(append){
        const elmFullNameInput = await this.appendTextInput;
        await expect(elmFullNameInput).toHaveValueContaining(append);
    }

    //3. Verify text inside input
    async verifyInputText(text){
        const elmGetValueTextInput = await this.getValueTextInput;
        await expect(elmGetValueTextInput).toHaveValue(text);
    }
}

export default new InputFullName();
