import { Given, When, Then } from '@wdio/cucumber-framework';
import RadioPage from '../../page-objects/radio-pages/radio.page.js';

//1. select one radio option
When(/^I select one of the first radio options$/, async () => {
	await RadioPage.selectFirstRadio();
});

Then(/^I confirm that the first radio button is selected$/, async () => {
	await RadioPage.verifySelectedFirstRadio();
});
