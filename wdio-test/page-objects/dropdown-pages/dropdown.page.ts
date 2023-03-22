import Page from '../page.js';
import { Key } from 'webdriverio'

class DropdownPage extends Page {
   
    get fruitsSelect(){ return $(`//select[@id='fruits']`) };
    get selectedMessage1(){ return $(`(//p[@class='subtitle'])[1]`) };
    get heroesSelectOptions(){ return $$(`//select[@id='superheros']//option`) };

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

}

export default new DropdownPage();
