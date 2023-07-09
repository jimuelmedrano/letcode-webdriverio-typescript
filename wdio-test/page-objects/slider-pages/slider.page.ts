import Page from '../page.js';

class SliderPage extends Page {
   
    get slider(){ return $(`//input[@id='generate']`) };
    get getCountriesButton(){ return $(`//button[normalize-space()='Get Countries']`) };
    get getCountriesText(){ return $(`//p[@class='has-text-primary-light']`) };


    async clickAndMoveSlider(){
        const elmSlider = await this.slider;
        await this.click(elmSlider);
        for (let i = 0; i < 16; i++) {
            await browser.keys('ArrowLeft');
        }
    }

    async clickGetCountriesButton(){
        const elmGetCountriesButton = await this.getCountriesButton;
        await this.click(elmGetCountriesButton);
    }

    async countCountries(){
        const elmGetCountriesText = await this.getCountriesText;
        const countryList = await this.getText(elmGetCountriesText);
        const countries = countryList.split(' - ');
        console.log('COUNTRY COUNT: ' + countries.length);
        console.log('COUNTRIES: '+ countries.toString())
    }


}

export default new SliderPage();
