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
