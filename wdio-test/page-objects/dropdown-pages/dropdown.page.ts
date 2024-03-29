import Page from '../page.js';
import { Key } from 'webdriverio'

class DropdownPage extends Page {
   
    get fruitsSelect(){ return $(`//select[@id='fruits']`) };
    get selectedMessage1(){ return $(`//p[@class='subtitle']`) };
    get heroesSelectOptions(){ return $$(`//select[@id='superheros']//option`) };
    get progLangSelectOptions(){ return $$(`//select[@id='lang']//option`) };
    get progLangSelect(){ return $(`//select[@id='lang']`) };
    get selectedMessage2(){ return $(`//p[@class='subtitle']`) };
    get valueSelect(){ return $(`//select[@id='country']`) };

    //1. Select by Visible Text
    async selectFruit(option){
        const elmFruitsSelect = await this.fruitsSelect;
        await elmFruitsSelect.selectByVisibleText(option);
    }

    async verifySelectedMessage1(option){
        const elmSelectedMessage1 = await this.selectedMessage1;
        await expect(elmSelectedMessage1).toHaveText('You have selected ' + option);
    }

    //2. Select Multiple Options
    async printAllOption(){
        const elmHeroesSelectOptions = await this.heroesSelectOptions;
        console.log('All Hero Options: ');
        for await (const optionElement of elmHeroesSelectOptions) {
            console.log(await this.getText(optionElement));
          }
    }

    async selectMultipleOption(options: String){
        const elmHeroesSelectOptions = await this.heroesSelectOptions;
        //Hold Ctrl key
        await browser.action('key')
        .down(Key.Ctrl)
        .perform()

        //Click the options
        for await (const optionElement of elmHeroesSelectOptions) {
            const elmText = await this.getText(optionElement);
            if(options.includes(elmText)){
                await this.click(optionElement);
            }
          }
        
        //Release the Ctrl key
        await browser.action('key')
        .up(Key.Ctrl)
        .perform()
        //await browser.pause(5000);
    }

    //3. Select Last Option
    async selectLastOption(){
        const elmProgLangSelectOptions = await this.progLangSelectOptions;
        const elmProgLangSelect = await this.progLangSelect;
        //index is length -1 since index count starts at 0 and length count starts at 1
        await elmProgLangSelect.selectByIndex(elmProgLangSelectOptions.length-1);

        console.log('All Programming Language Options: ');
        for await (const optionElement of elmProgLangSelectOptions) {
            console.log(await this.getText(optionElement));
          }
    }

    async verifySelectedMessage2(option){
        const elmSelectedMessage2 = await this.selectedMessage2;
        await expect(elmSelectedMessage2).toHaveText('You have selected ' + option);
    }

    //4. Select Using Value
    async selectByValue(option){
        const elmValueSelect = await this.valueSelect;
        await elmValueSelect.selectByAttribute('value', option);
    }

}

export default new DropdownPage();
