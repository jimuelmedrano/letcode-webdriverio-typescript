import Page from '../page.js';
import apiHelper from '../../../helper/api-helper.js';

class FormPage extends Page {
   
    get openHomeButton(){ return $(`//button[normalize-space()='Open Home Page']`) };


    

    userInfo = apiHelper.GET(process.env.RANDOM_USER_API_URL, process.env.RANDOM_USER_API_ENDPOINT, '', {})
    firstName = ''
    lastName = ''
    email = ''
    phoneCountry = ''
    phoneNumber = ''
    addressLine1 = ''
    addressLine2 = ''
    state = ''
    postalCode = ''
    country = ''
    birthDate = ''
    gender = ''

    async initializeRandomData() {
        const apiRawResult = await this.userInfo;
        const apiResult = apiRawResult.body;
        //for dates we can use moment.js but for this case we will use browser keys so random int is used
        const randomMonth = await this.getRandomInt(1, 11);
        const randomDay = await this.getRandomInt(1, 27);
        const randomYear = await this.getRandomInt(1960, 2010);

        this.firstName = apiResult.first_name;
        this.lastName = apiResult.last_name;
        this.birthDate = ''+randomMonth+randomDay+randomYear;
        this.gender = 'Male';
        this.phoneCountry = 'PH';
        this.phoneNumber = '' + await this.getRandomInt(9000000000, 9999999999);
        this.email = apiResult.username + await this.getRandomInt(1000, 9999) + '@email.com';
        this.addressLine1 = apiResult.address.street_address;
        this.addressLine2 = apiResult.address.street_name;
        this.country = apiResult.country;
        this.state = apiResult.address.state;
        this.postalCode = '' + await this.getRandomInt(1000, 9999);
    }


    get firstNameInput(){ return $(`//input[@id='firstname']`) };
    get lastNameInput(){ return $(`//input[@id='lasttname']`) };
    get emailInput(){ return $(`//input[@id='email']`) };
    get countryCodeSelect(){ return $(`//div[@class='select']//select`) };
    get phoneNumberInput(){ return $(`//input[@id='Phno']`) };
    get addressLine1Input(){ return $(`//input[@id='Addl1']`) };
    get addressLine2Input(){ return $(`//input[@id='Addl2']`) };
    get stateInput(){ return $(`//input[@id='state']`) };
    get postalCodeInput(){ return $(`//input[@id='postalcode']`) };
    get countrySelect(){ return $(`//label[normalize-space()='Country']//following-sibling::div//select`) };
    get dateOfBirthInput(){ return $(`//input[@id='Date']`) };
    get genderRadio(){ return $(`//input[@id='male']`) };
    get checkTerms(){ return $(`//input[@type='checkbox']`) };
    get submitButton(){ return $(`//input[@type='submit']`) };

    async inputFirstName(){
        const elmFirstNameInput = await this.firstNameInput;
        await this.inputText(elmFirstNameInput,this.firstName);
    }

    async inputLastName(){
        const elmLastNameInput = await this.lastNameInput;
        await this.inputText(elmLastNameInput,this.lastName);
    }

    async inputEmail(){
        const elmEmailInput = await this.emailInput;
        await elmEmailInput.clearValue();
        await this.inputText(elmEmailInput,this.email);
    }

    async selectCountryCode(){
        const elmCountryCodeSelect = await this.countryCodeSelect;
        await this.click(elmCountryCodeSelect);
        await browser.keys(this.phoneCountry);
        await browser.keys('Enter')
    }

    async inputPhoneNumber(){
        const elmPhoneNumberInput = await this.phoneNumberInput;
        await this.inputText(elmPhoneNumberInput,this.phoneNumber);
    }

    async inputAddressLine1(){
        const elmAddressLine1Input = await this.addressLine1Input;
        await this.inputText(elmAddressLine1Input,this.addressLine1);
    }

    async inputAddressLine2(){
        const elmAddressLine2Input = await this.addressLine2Input;
        await this.inputText(elmAddressLine2Input,this.addressLine2);
    }

    async inputState(){
        const elmStateInput = await this.stateInput;
        await this.inputText(elmStateInput,this.state);
    }

    async inputPostalCode(){
        const elmPostalCodeInput = await this.postalCodeInput;
        await this.inputText(elmPostalCodeInput,this.postalCode);
    }

    async selectCountry(){
        const elmCountrySelect = await this.countrySelect;
        await elmCountrySelect.selectByVisibleText('Philippines');
    }

    async inputDateOfBirth(){
        const elmDateOfBirthInput = await this.dateOfBirthInput;
        await this.click(elmDateOfBirthInput);
        await browser.keys(this.birthDate);
    }

    async selectGender(){
        const elmGenderRadio = await this.genderRadio;
        await this.click(elmGenderRadio);
    }

    async selectTermsAndConditions(){
        const elmcheckTerms = await this.checkTerms;
        await this.click(elmcheckTerms);
    }

    async clickSubmit(){
        const elmSubmitButton = await this.submitButton;
        await this.click(elmSubmitButton);
    }

}

export default new FormPage();
