import Page from '../page.js';


class ButtonPage extends Page {

    get homeButton(){ return $(`//button[@id='home']`) };
    get coordinatesButton(){ return $(`//button[@id='position']`) };
   
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

}

export default new ButtonPage();
