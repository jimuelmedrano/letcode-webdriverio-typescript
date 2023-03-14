import { Given, When, Then } from '@wdio/cucumber-framework';
import ButtonPage from '../../page-objects/button-pages/button.page.js';

//1. Click Home Button
When(/^I click home button inside button page$/, async () => {
	await ButtonPage.clickHomeButton();
});

When(/^I go back to the previous page using driver navigation$/, async () => {
	await browser.back();
});

Then(/^I should be inside the button page$/, async () => {
	await ButtonPage.verifyButtonPage();
});

//2. Get Coordinates of Button
Then(/^I should be able to get the coordinates of the second button$/, async () => {
	await ButtonPage.getButtonCoordinates();
});

//3. Get Color of Button
Then(/^I should be able to get the color of the third button$/, async () => {
	await ButtonPage.getButtonColor();
});

//4. Get Size of Button
Then(/^I should be able to get the size of the fourth button$/, async() => {
	await ButtonPage.getButtonSize();
});

//5. Check button if disabled
Then(/^I should be able to verify if the fifth button is disabled$/, async () => {
	await ButtonPage.checkDisabled();
});




