import { Given, When, Then } from '@wdio/cucumber-framework';
import AlertPage from '../../page-objects/alert-pages/alert.page.js';

//1. Accept Alert
When(/^I click the first sample alert$/, async () => {
	await AlertPage.clickFirstSampleAlertButton();
});

Then(/^I should be able to accept the alert$/, async () => {
	await AlertPage.acceptAlert();
});
