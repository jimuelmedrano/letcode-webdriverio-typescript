import { Given, When, Then } from '@wdio/cucumber-framework';
import LetcodeWorkspacePage from '../page-objects/letcode-workspace.page.js';

Given(/^I am on letcode workspace page$/, async () => {
	await LetcodeWorkspacePage.openWorkspacePage();
});

When(/^I click input edit button$/, async () => {
	await LetcodeWorkspacePage.clickInputEditButton();
});