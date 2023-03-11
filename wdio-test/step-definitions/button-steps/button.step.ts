import { Given, When, Then } from '@wdio/cucumber-framework';
import ButtonPage from '../../page-objects/button-pages/button.page.js';

When(/^I click home button inside button page$/, async () => {
	await ButtonPage.clickHomeButton();
});

When(/^I go back to the previous page using driver navigation$/, async () => {
	await browser.back();
});

Then(/^I should be inside the button page$/, async () => {
	await ButtonPage.verifyButtonPage();
});

Then(/^I should be able to get the coordinates of the second button$/, async () => {
	return true;
});

