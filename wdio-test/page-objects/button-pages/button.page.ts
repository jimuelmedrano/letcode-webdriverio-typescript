import Page from '../page.js';


class ButtonPage extends Page {

    get homeButton(){ return $(`//button[@id='home']`) };
    get coordinatesButton(){ return $(`//button[@id='position']`) };
    get colorButton(){ return $(`//button[@id='color']`) };
    get sizeButton(){ return $(`//button[@id='property']`) };
    get disabledButton(){ return $(`//button[@id='isDisabled']`) };
   
    //1. Click Home Button
    async clickHomeButton () {
        const elmHomeButton = await this.homeButton;
        await this.click(elmHomeButton);
    }

    async verifyButtonPage () {
        const elmHomeButton = await this.homeButton;
        await this.verifyElement(elmHomeButton);
    }

    //2. Get Coordinates of Button
    async getButtonCoordinates () {
        const elmHomeButton = await this.coordinatesButton;
        const coordinate = await elmHomeButton.getLocation();
        console.log('Button Coordinate: ' + JSON.stringify(coordinate));
    }

    //3. Get Color of Button
    async getButtonColor () {
        const elmColorButton = await this.colorButton;
        const color = await elmColorButton.getCSSProperty('background-color');
        console.log('Button Color: ' + JSON.stringify(color));
    }

    //4. Get Size of Button
    async getButtonSize () {
        const elmSizeButton = await this.sizeButton;
        const size = await elmSizeButton.getSize();
        console.log('Button Size: ' + JSON.stringify(size));
    }

    //5. Check button if disabled
    async checkDisabled () {
        const elmDisabledButton = await this.disabledButton;
        await expect(elmDisabledButton).toBeDisabled();
    }

}

export default new ButtonPage();
