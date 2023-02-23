import { Given, When, Then } from '@wdio/cucumber-framework';
import InputFullNamePage from '../../page-objects/input/input-full-name.page.js';

When(/^I input first name (.*) and last name (.*) in the text field$/, async (firstName,lastName) => {
	await InputFullNamePage.inputFullName(firstName,lastName);
});

Then(/^The current text should be equal to the combination of (.*) and (.*)$/, async (firstName,lastName) => {
	await InputFullNamePage.verifyFullName(firstName,lastName);
});
