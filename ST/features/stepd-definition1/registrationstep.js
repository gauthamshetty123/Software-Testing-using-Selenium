const { Given, When, Then, Before, After } = require('@cucumber/cucumber');
const { By, Builder, until } = require('selenium-webdriver');
require('chromedriver');

let driver;

Before(async function () {
    driver = await new Builder().forBrowser('chrome').build();
});

After(async function () {
    await driver.quit();
});

Given('I am in dashboard page for registration', async function () {
    await driver.get('http://localhost:3000/');
});

When('I click on the Login navigation bar for registration', async function () {
    await driver.wait(until.elementLocated(By.css('a[href="/login"]')), 20000).click();
    await driver.sleep(1000);
});

When('I click on the Register link for registration', async function () {
    await driver.wait(until.elementLocated(By.css('a[href="/register"]')), 20000).click();
    await driver.sleep(1000);
});

When('I enter username as {string} for registration', async function (username) {
    let userName = await driver.wait(until.elementLocated(By.css('[type="text"]')));
    await userName.clear();
    await userName.sendKeys(username);
    await driver.sleep(1000);
});

When('I enter email as {string} for registration', async function (email) {
    let userEmail = await driver.wait(until.elementLocated(By.css('[type="email"]')));
    await userEmail.clear();
    await userEmail.sendKeys(email);
    await driver.sleep(1000);
});

When('I enter password as {string} for registration', async function (password) {
    let userPassword = await driver.wait(until.elementLocated(By.css('[type="password"]')));
    await userPassword.clear();
    await userPassword.sendKeys(password);
    await driver.sleep(1000);
});

When('I click on the Register button for registration', async function () {
    await driver.wait(until.elementLocated(By.css('button[type="submit"]')), 20000).click();
});

Then('I should get message {string} for registration', async function (msg) {
    await driver.wait(until.alertIsPresent(), 10000);
    let alert = await driver.switchTo().alert();
    let alertText = await alert.getText();
    alertText = alertText.replace(/["']/g, "");
    if (msg === alertText) {
        console.log('Alert is correct');
    } else {
        console.log(`Expected: ${msg}, but got: ${alertText}`);
    }
    await alert.accept();
});
