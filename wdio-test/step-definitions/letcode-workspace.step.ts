import { Given, When, Then } from '@wdio/cucumber-framework';
import LetcodeWorkspacePage from '../page-objects/letcode-workspace.page.js';

Given(/^I am on letcode workspace page$/, async () => {
	await LetcodeWorkspacePage.openWorkspacePage();
});

When(/^I click input page$/, async () => {
	await LetcodeWorkspacePage.clickInputEditButton();
});

When(/^I click button page$/, async () => {
	await LetcodeWorkspacePage.clickButtonPage();
});

When(/^I click dropdown page$/, async () => {
	await LetcodeWorkspacePage.clickDropdownPage();
});

When(/^I click alert page$/, async () => {
	await LetcodeWorkspacePage.clickAlertPage();
});

When(/^I click frame page$/, async () => {
	await LetcodeWorkspacePage.clickFramePage();
});

When(/^I click radio page$/, async () => {
	await LetcodeWorkspacePage.clickRadioPage();
});

When(/^I click window page$/, async () => {
	await LetcodeWorkspacePage.clickWindowPage();
});

When(/^I click drag and drop page$/, async () => {
	await LetcodeWorkspacePage.clickDragDropPage();
});

When(/^I click slider page$/, async () => {
	await LetcodeWorkspacePage.clickSliderPage();
});