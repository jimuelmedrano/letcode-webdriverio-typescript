import Page from '../page.js';

class FramePage extends Page {

    get firstNameInput(){ return $(`//input[@name='fname']`) };
    get lastNameInput(){ return $(`//input[@name='lname']`) };
    get contentFrame(){ return $(`//iframe[@id='firstFr']`) };
    get innerFrame(){ return $(`//iframe[@src='innerFrame']`) };
    get fullNameMessage(){ return $(`//p[@class='title has-text-info']`) };
    get emailInput(){ return $(`//input[@name='email']`) };

    //1. input full name and email
    async inputFullName(firstName,lastName){
        const elmContentFrame = await this.contentFrame;
        await browser.switchToFrame(elmContentFrame);
        const elmFirstNameInput = await this.firstNameInput;
        const elmLastNameInput = await this.lastNameInput;
        await this.inputText(elmFirstNameInput,firstName);
        await this.inputText(elmLastNameInput,lastName);
        await browser.pause(1000);
    }

    async checkFrameMessage(firstName,lastName){
        const elmFullNameMessage = await this.fullNameMessage;
        const fullName = firstName + ' ' + lastName
        await expect(elmFullNameMessage).toHaveTextContaining(fullName);
    }

    async inputEmail(email){
        const elmInnerFrame = await this.innerFrame;
        await browser.switchToFrame(elmInnerFrame);
        const elmEmailInput = await this.emailInput;
        await this.inputText(elmEmailInput,email);
        await browser.pause(2000)
    }

}

export default new FramePage();
