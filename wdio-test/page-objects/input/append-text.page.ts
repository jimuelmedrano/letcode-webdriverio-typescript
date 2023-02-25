import Page from '../page.js';

class AppendText extends Page {
   

    get appendTextInput(){ return $(`//input[@id='join']`) };

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

}

export default new AppendText();
