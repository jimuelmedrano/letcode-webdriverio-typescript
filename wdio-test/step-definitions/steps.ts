import { Given, When, Then } from '@wdio/cucumber-framework';

import LoginPage from '../page-objects/login.page.js';
import SecurePage from '../page-objects/secure.page.js';

const pages = {
    login: LoginPage
}

Given(/^I am on the (\w+) page$/, async (page) => {
    await pages[page].open()
});

When(/^I login with username and password$/, async () => {
    await LoginPage.login()
});

Then(/^I should see a flash message saying (.*)$/, async (message) => {
    await expect(SecurePage.flashAlert).toBeExisting();
    await expect(SecurePage.flashAlert).toHaveTextContaining(message);
});

