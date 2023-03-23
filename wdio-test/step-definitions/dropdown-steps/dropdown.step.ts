import { Given, When, Then } from '@wdio/cucumber-framework';
import DropdownPage from '../../page-objects/dropdown-pages/dropdown.page.js';

//1. Select by Visible Text
When(/^I click the first dropdown and select the option: (.*)$/, async (option) => {
	await DropdownPage.selectFruit(option);
});

Then(/^I should be able to verify that the selected option is (.*)$/, async (option) => {
	await DropdownPage.verifySelectedMessage1(option);
});

//2. Select Multiple Options
When(/^I get and print all the options of second dropdown$/, async () => {
	await DropdownPage.printAllOption();
});

Then(/^I should be able to select the following options: (.*)$/, async (options) => {
	await DropdownPage.selectMultipleOption(options);
});

//3. Select Last Option
When(/^I select the last option of third dropdown and print all option$/, async () => {
	await DropdownPage.selectLastOption();
});

Then(/^I should be able to verify that the selected programming language option is (.*)$/, async (option) => {
	await DropdownPage.verifySelectedMessage2(option);
});

//4. Select Using Value
Then(/^I should be able to select option of last dropdown using value: (.*)$/, async (value) => {
	await DropdownPage.selectByValue(value);
});
