import { Given, When, Then } from '@wdio/cucumber-framework';
import AlertPage from '../../page-objects/alert-pages/alert.page.js';

//1. Accept Alert
When(/^I click the first sample alert$/, async () => {
	await AlertPage.clickFirstSampleAlertButton();
});

Then(/^I should be able to accept the alert$/, async () => {
	await AlertPage.acceptAlert();
});

//2. Dismiss and print alert
When(/^I click the second sample alert$/, async () => {
	await AlertPage.clickSecondSampleAlertButton();
});

When(/^I print the alert message$/, async () => {
	await AlertPage.printAlert();
});

Then(/^I should be able to dismiss the alert$/, async () => {
	await AlertPage.dismissAlert();
});

//3. Input text in alert and accept
When(/^I click the third sample alert$/, async () => {
	await AlertPage.clickThirdSampleAlertButton();
});

When(/^I add text to alert: (.*)$/, async (text) => {
	await AlertPage.inputAlert(text);
});

Then(/^I should be able to verify that the alert text is (.*)$/, async (text) => {
	await AlertPage.verifyPromptAlertMessage(text);
});

//4. Sweet alert
When(/^I click the last sample alert$/, async () => {
	await AlertPage.clickFourthSampleAlertButton();
});

When(/^I print the sweet alert message$/, async () => {
	await AlertPage.printSweetAlert();
});

Then(/^I should be able to close the sweet alert message$/, async () => {
	await AlertPage.clickCloseSweetAlertButton();
});
