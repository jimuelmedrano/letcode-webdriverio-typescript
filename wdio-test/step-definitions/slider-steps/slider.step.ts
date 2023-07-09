import { Given, When, Then } from '@wdio/cucumber-framework';
import SliderPage from '../../page-objects/slider-pages/slider.page.js';

When(/^I slide the slider$/, async () => {
	await SliderPage.clickAndMoveSlider();
});

When(/^I click get countries button$/, async () => {
	await SliderPage.clickGetCountriesButton();
});

Then(/^I validate that country count is same as slider count$/, async () => {
	await SliderPage.countCountries();
});
