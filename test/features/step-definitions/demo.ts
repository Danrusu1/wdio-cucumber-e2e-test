import { Given, When, Then } from "@cucumber/cucumber";
import { browser } from "@wdio/globals";
import * as chai from "chai";

Given(/^Google page is open$/, async function() {
    await browser.url("https://google.com");
    await browser.$("#L2AGLb").click();
    // await browser.pause(7000);
});

When(/^Search with (.*)$/, async function(searchItem: string) {
    await browser.$("#APjFqb").setValue(searchItem);
    await browser.keys("Enter");
    // await browser.pause(7000);
});

Then(/^I click on the first result$/, async function() {
    let element = await $("<h3>");
    await element.click();
    await browser.pause(3000);
});

Then(/^the url should match (.*)$/, function(expectedUrl: string) {
    chai.expect(browser).to.have.url(expectedUrl);
});
