import Page from '../page.js';

class InputFullName extends Page {
   

    get fullNameInput(){ return $(`//input[@id='fullName']`) };
    get appendTextInput(){ return $(`//input[@id='join']`) };
    get getValueTextInput(){ return $(`//input[@id='getMe']`) };
    get clearValueTextInput(){ return $(`//input[@id='clearMe']`) };
    get disabledTextInput(){ return $(`//input[@id='noEdit']`) };
    get readOnlyTextInput(){ return $(`//input[@id='dontwrite']`) };

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

    //3. Verify Value Scenario
    async verifyInputText(text){
        const elmGetValueTextInput = await this.getValueTextInput;
        await expect(elmGetValueTextInput).toHaveValue(text);
    }

    //4. Clear Value Scenario
    async clearTextInput(){
        const elmClearValueTextInput = await this.clearValueTextInput;
        await elmClearValueTextInput.clearValue();
    }

    async verifyClearTextValue(){
        const elmClearValueTextInput = await this.clearValueTextInput;
        await expect(elmClearValueTextInput).toHaveValue('');
    }
    
    //5. Disabled Input Scenario
    async verifyDisabledInput(){
        const elmDisabledTextInput = await this.disabledTextInput;
        await expect(elmDisabledTextInput).toBeDisabled();
        //same as: await expect(elem).not.toBeEnabled()
    }

    //6. Read Only Input Scenario
    async verifyReadOnlyInput(){
        const elmReadOnlyTextInput = await this.readOnlyTextInput;
        const readOnlyStatus = await elmReadOnlyTextInput.getAttribute('readonly')
        await expect(readOnlyStatus).toEqual('true');
    }

}

export default new InputFullName();
