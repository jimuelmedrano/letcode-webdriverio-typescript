import Page from './page.js';

class LetcodeWorkspace extends Page {
   
    get inputEditButton(){ return $(`//a[normalize-space()='Edit']`) };
    get buttonPageButton(){ return $(`//a[normalize-space()='Click']`) };
    get dropdownPageButton(){ return $(`//a[normalize-space()='Drop-Down']`) };
    get alertPageButton(){ return $(`//a[normalize-space()='Dialog']`) };
    get framePageButton(){ return $(`//a[normalize-space()='Inner HTML']`) };
    get radioPageButton(){ return $(`//a[normalize-space()='Toggle']`) };

    async openWorkspacePage () {
        await this.open('/test');
    }

    async clickInputEditButton(){
        const elmInputEditButton = await this.inputEditButton;
        await this.click(elmInputEditButton);
    }

    async clickButtonPage(){
        const elmButtonPageButton = await this.buttonPageButton;
        await this.click(elmButtonPageButton);
    }

    async clickDropdownPage(){
        const elmDropdownPageButton = await this.dropdownPageButton;
        await this.click(elmDropdownPageButton);
    }

    async clickAlertPage(){
        const elmAlertPageButton = await this.alertPageButton;
        await this.click(elmAlertPageButton);
    }

    async clickFramePage(){
        const elmFramePageButton = await this.framePageButton;
        await this.click(elmFramePageButton);
    }

    async clickRadioPage(){
        const elmRadioPageButton = await this.radioPageButton;
        await this.click(elmRadioPageButton);
    }
}

export default new LetcodeWorkspace();
