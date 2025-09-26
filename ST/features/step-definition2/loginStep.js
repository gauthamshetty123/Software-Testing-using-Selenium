const { Given, When, Then, Before, After } = require('@cucumber/cucumber');
const { By, Builder, until } = require('selenium-webdriver');
require('chromedriver');

let driver = null;

Before(async function () {
    if (!driver) {
        driver = await new Builder().forBrowser('chrome').build();
    }
});

After(async function () {
    if (driver) {
        await driver.quit();
        driver = null; 
    }
});

Given('I am in dashboard page for login', async function () {
    await driver.get('http://localhost:3000/');
});

When('I click on the Login navigation bar for login', async function () {
    let loginNavBar = await driver.wait(until.elementLocated(By.css('a[href="/login"]')), 20000);
    await loginNavBar.click();
    await driver.sleep(1000);
});

When('I enter email as {string} for login', async function (email) {
    let userEmail = await driver.wait(until.elementLocated(By.css('[type="email"]')), 20000);
    await userEmail.clear();
    await userEmail.sendKeys(email);
    await driver.sleep(1000);
});

When('I enter password as {string} for login', async function (password) {
    let userPassword = await driver.wait(until.elementLocated(By.css('[type="password"]')), 20000);
    await userPassword.clear();
    await userPassword.sendKeys(password);
    await driver.sleep(1000);
});

When('I click on the Login button for login', async function () {
    let loginButton = await driver.wait(until.elementLocated(By.css('button[type="submit"]')), 20000);
    await loginButton.click();
});

Then('I should get the message {string} for login', async function (msg) {
    try {
        await driver.wait(until.alertIsPresent(), 20000); // Increased timeout to 20000 milliseconds
        let alert = await driver.switchTo().alert();
        let alertText = await alert.getText();
        alertText = alertText.replace(/["']/g, "");  // Remove quotes if necessary
        if (msg === alertText) {
            console.log('Alert is correct');
        } else {
            console.log(`Expected: ${msg}, but got: ${alertText}`);
        }
        await alert.accept();
    } catch (error) {
        console.log('Error: ' + error.message);
    }
});
