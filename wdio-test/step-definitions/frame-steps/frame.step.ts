import { Given, When, Then } from '@wdio/cucumber-framework';
import FramePage from '../../page-objects/frame-pages/frame.page.js';

When(/^I go to frame and input first name (.*) and last name (.*) in the text field$/, async (firstName,lastName) => {
	await FramePage.inputFullName(firstName,lastName);
});

When(/^The frame full name should be combination of (.*) and (.*)$/, async (firstName,lastName) => {
	await FramePage.checkFrameMessage(firstName,lastName);
});

Then(/^I should be able to input email: (.*) in the inner html$/, async (email) => {
	await FramePage.inputEmail(email);
});
