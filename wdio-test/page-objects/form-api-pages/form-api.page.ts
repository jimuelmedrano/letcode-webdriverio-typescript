import Page from '../page.js';

class FormPage extends Page {
   
    get openHomeButton(){ return $(`//button[normalize-space()='Open Home Page']`) };


    async clickOpenHomeButton(){
        const elmOpenHomeButton = await this.openHomeButton;
        await this.click(elmOpenHomeButton);
    }

}

export default new FormPage();
