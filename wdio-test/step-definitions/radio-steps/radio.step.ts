import { Given, When, Then } from '@wdio/cucumber-framework';
import RadioPage from '../../page-objects/radio-pages/radio.page.js';

//1. select one radio option
When(/^I select one of the first radio options$/, async () => {
	await RadioPage.selectFirstRadio();
});

Then(/^I confirm that the first radio button is selected$/, async () => {
	await RadioPage.verifySelectedFirstRadio();
});

//2. verify that only one radio is selected
When(/^I select the first radio of the second radio automation challenge$/, async () => {
	await RadioPage.selectRadioOne();
});

When(/^I confirm that the second radio is not selected$/, async () => {
	await RadioPage.verifyRadioOne();
});

When(/^I select the second radio of the second radio automation challenge$/, async () => {
	await RadioPage.selectRadioTwo();
});

When(/^I confirm that the first radio is not selected$/, async () => {
	await RadioPage.verifyRadioTwo();
});

//3. verify that radio options has bug
When(/^I select the both radio of the third radio automation challenge$/, async () => {
	await RadioPage.selectBothRadioBug();
});

When(/^I confirm that both option of the third radio automation challenge is selected$/, async () => {
	await RadioPage.verifyRadioBug();
});

//4. verify which option is selected
When(/^I check and print which option is selected$/, async () => {
	await RadioPage.printSelectedOption();
});

//5. verify last radio option is disabled
When(/^I verify that last radio option is disabled$/, async () => {
	await RadioPage.verifyRadioDisabled();
});

//6. verify selected checkbox
When(/^I verify that checkbox is selected$/, async () => {
	await RadioPage.verifyCheckboxSelected();
});

//7. accept terms and conditions
When(/^I click checkbox to accept the terms and conditions$/, async () => {
	await RadioPage.checkSelectedCheckbox();
});
