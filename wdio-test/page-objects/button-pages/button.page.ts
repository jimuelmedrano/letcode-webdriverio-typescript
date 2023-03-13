import Page from '../page.js';


class ButtonPage extends Page {

    get homeButton(){ return $(`//button[@id='home']`) };
    get coordinatesButton(){ return $(`//button[@id='position']`) };
    get colorButton(){ return $(`//button[@id='color']`) };
    get sizeButton(){ return $(`//button[@id='property']`) };
   
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

    //2. Get Color of Button
    async getButtonColor () {
        const elmColorButton = await this.colorButton;
        const color = await elmColorButton.getCSSProperty('background-color');
        console.log('Button Color: ' + JSON.stringify(color));
    }

    //2. Get Size of Button
    async getButtonSize () {
        const elmSizeButton = await this.sizeButton;
        const size = await elmSizeButton.getSize();
        console.log('Button Size: ' + JSON.stringify(size));
    }

}

export default new ButtonPage();
