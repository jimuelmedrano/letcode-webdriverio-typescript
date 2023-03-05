import Page from './page.js';

class LetcodeWorkspace extends Page {
   
    get inputEditButton(){ return $(`//a[normalize-space()='Edit']`) };

    async openWorkspacePage () {
        await this.open('/test');
    }

    async clickInputEditButton(){
        const elmInputEditButton = await this.inputEditButton;
        await this.click(elmInputEditButton);
    }
}

export default new LetcodeWorkspace();
