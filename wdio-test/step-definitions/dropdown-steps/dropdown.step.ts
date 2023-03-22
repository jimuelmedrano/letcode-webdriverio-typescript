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
