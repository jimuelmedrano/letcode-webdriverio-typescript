import Page from '../page.js';

class DropdownPage extends Page {
   
    get fruitsSelect(){ return $(`//select[@id='fruits']`) };
    get selectedMessage1(){ return $(`(//p[@class='subtitle'])[1]`) };

    async selectFruit(option){
        const elmFruitsSelect = await this.fruitsSelect;
        await elmFruitsSelect.selectByVisibleText(option);
    }

    async verifySelectedMessage1(option){
        const elmSelectedMessage1 = await this.selectedMessage1;
        await expect(elmSelectedMessage1).toHaveText('You have selected ' + option);
    }
}

export default new DropdownPage();
