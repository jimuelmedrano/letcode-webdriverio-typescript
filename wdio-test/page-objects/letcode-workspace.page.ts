import Page from './page.js';

class LetcodeWorkspace extends Page {
   
    get inputEditButton(){ return $(`//a[normalize-space()='Edit']`) };
    get buttonPageButton(){ return $(`//a[normalize-space()='Click']`) };

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
}

export default new LetcodeWorkspace();
