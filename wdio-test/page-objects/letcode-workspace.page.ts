import Page from './page.js';

class LetcodeWorkspace extends Page {
   
    get inputEditButton(){ return $(`//a[normalize-space()='Edit']`) };
    get buttonPageButton(){ return $(`//a[normalize-space()='Click']`) };
    get dropdownPageButton(){ return $(`//a[normalize-space()='Drop-Down']`) };
    get alertPageButton(){ return $(`//a[normalize-space()='Dialog']`) };
    get framePageButton(){ return $(`//a[normalize-space()='Inner HTML']`) };
    get radioPageButton(){ return $(`//a[normalize-space()='Toggle']`) };
    get windowPageButton(){ return $(`//a[normalize-space()='Tabs']`) };
    get dragDropPageButton(){ return $(`//a[normalize-space()='AUI - 2']`) };
    get sliderPageButton(){ return $(`//a[normalize-space()='AUI - 5']`) };

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
        await elmFramePageButton.scrollIntoView();
        await this.click(elmFramePageButton);
    }

    async clickRadioPage(){
        const elmRadioPageButton = await this.radioPageButton;
        await elmRadioPageButton.scrollIntoView();
        await this.click(elmRadioPageButton);
    }

    async clickWindowPage(){
        const elmWindowPageButton = await this.windowPageButton;
        await elmWindowPageButton.scrollIntoView();
        await this.click(elmWindowPageButton);
    }

    async clickDragDropPage(){
        const elmDragDropPageButton = await this.dragDropPageButton;
        await elmDragDropPageButton.scrollIntoView();
        await this.click(elmDragDropPageButton);
    }

    async clickSliderPage(){
        const elmSliderPageButton = await this.sliderPageButton;
        await elmSliderPageButton.scrollIntoView();
        await this.click(elmSliderPageButton);
    }
}

export default new LetcodeWorkspace();
