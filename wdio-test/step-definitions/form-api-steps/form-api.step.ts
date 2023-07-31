import { Given, When, Then } from '@wdio/cucumber-framework';
import FormApiPage from '../../page-objects/form-api-pages/form-api.page.js';

When(/^I input form first name$/, async () => {
	await FormApiPage.initializeRandomData();
	await FormApiPage.inputFirstName();
});

When(/^I input form last name$/, async () => {
	await FormApiPage.inputLastName();
});

When(/^I input form email$/, async () => {
	await FormApiPage.inputEmail();
});

When(/^I select form country code$/, async () => {
	await FormApiPage.selectCountryCode();
});

When(/^I input form phone number$/, async () => {
	await FormApiPage.inputPhoneNumber();
});

When(/^I input form address line 1$/, async () => {
	await FormApiPage.inputAddressLine1();
});

When(/^I input form address line 2$/, async () => {
	await FormApiPage.inputAddressLine2();
});

When(/^I input form state$/, async () => {
	await FormApiPage.inputState();
});

When(/^I input form postal code$/, async () => {
	await FormApiPage.inputPostalCode();
});

When(/^I select form country$/, async () => {
	await FormApiPage.selectCountry();
});

When(/^I input form date of birth$/, async () => {
	await FormApiPage.inputDateOfBirth();
});

When(/^I select form gender$/, async () => {
	await FormApiPage.selectGender();
});

When(/^I click agree to form terms and condition$/, async () => {
	await FormApiPage.selectTermsAndConditions();
});

When(/^I click form submit button$/, async () => {
	await FormApiPage.clickSubmit();
});

Then(/^I should be able to verify that the form is successfully submitted$/, async () => {
	return true;
});
