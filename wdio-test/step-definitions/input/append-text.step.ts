import { Given, When, Then } from '@wdio/cucumber-framework';
import AppendTextPage from '../../page-objects/input/append-text.page.js';

When(/^I append the text: `(.*)` inside the input field and press tab$/, async(append) => {
	await AppendTextPage.appendNewText(append);
});

Then(/^The current input field text should include the appended text: `(.*)`$/, async (append) => {
	await AppendTextPage.verifyNewText(append);
});
