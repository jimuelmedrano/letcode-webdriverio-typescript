import { Given, When, Then } from '@wdio/cucumber-framework';
import DropdownPage from '../../page-objects/dropdown-pages/dropdown.page.js';

//1. Select by Visible Text
When(/^I click the first drop down and select the option: (.*)$/, async (option) => {
	await DropdownPage.selectFruit(option);
});

Then(/^I should be able to verify that the selected option is (.*)$/, async (option) => {
	await DropdownPage.verifySelectedMessage1(option);
});
