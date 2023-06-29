import { Given, When, Then } from '@wdio/cucumber-framework';
import DragdropPage from '../../page-objects/dragdrop-pages/dragdrop.page.js';

When(/^I drag and drop the box$/, async () => {
	await DragdropPage.dragAndDropDiv();
});

Then(/^I should be able to verify that box has been moved$/, async () => {
	await DragdropPage.confirmDropped();
});
