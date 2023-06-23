import { Given, When, Then } from '@wdio/cucumber-framework';
import windowPage from '../../page-objects/window-pages/window.page.js';

When(/^I click open home page button$/, async () => {
	await windowPage.clickOpenHomeButton();
});

Then(/^I print the title of new window$/, async () => {
	await windowPage.printNewWindowTitle();
});
