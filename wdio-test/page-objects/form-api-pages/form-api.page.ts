import Page from '../page.js';
import apiHelper from '../../helper/api-helper';

class FormPage extends Page {
   
    get openHomeButton(){ return $(`//button[normalize-space()='Open Home Page']`) };


    async clickOpenHomeButton(){
        const elmOpenHomeButton = await this.openHomeButton;
        await this.click(elmOpenHomeButton);
    }

   RANDOM_USER_API_URL="https://random-data-api.com"
RANDOM_USER_API_ENDPOINT="/api/users/random_user"
    userInfo = apiHelper.GET(process.env.RANDOM_USER_API_URL, process.env.RANDOM_USER_API_ENDPOINT, '', {})
    friendlyName = ''
    firstName = ''
    lastName = ''
    birthDate = ''
    gender = ''
    maritalStatus = ''
    phoneCountryCode = ''
    phoneNumber = ''
    email = ''
    addressLine1 = ''
    country = ''
    province = ''
    city = ''
    postalCode = ''
    workAvailability = ''
    currentSalaryCurrency = ''
    currentSalary = ''
    expectedSalaryCurrency = ''
    expectedSalary = ''

    async initializeRandomData() {
        const apiRawResult = await this.userInfo;
        const apiResult = apiRawResult.body;
        this.friendlyName =  'Auto' + apiResult.first_name + this.randomString(5);
        this.firstName = apiResult.first_name
        this.lastName = 'Automation'
        this.birthDate = apiResult.date_of_birth
        this.gender = 'Male'
        this.maritalStatus = 'Single'
        this.phoneCountryCode = '+63'
        this.phoneNumber = '' + await this.getRandomInt(9000000000, 9999999999)
        this.email = apiResult.username + await this.getRandomInt(1000, 9999) + '@email.com';
        this.addressLine1 = apiResult.address.street_address
        this.country = 'Philippines'
        this.province = 'Pampanga'
        this.city = 'Angeles City'
        this.postalCode = '1234'
        this.workAvailability = 'Immediate'
        this.currentSalaryCurrency = 'PHP'
        this.currentSalary = '30000'
        this.expectedSalaryCurrency = 'PHP'
        this.expectedSalary = '60000'
    }

}

export default new FormPage();
