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

Given('I am in dashboard page', async function () {
    await driver.get('http://localhost:3000/');
});

When("I click on the Login navigation bar", async function () {
    await driver.wait(until.elementLocated(By.css('a[href="/login"]')), 20000).click();
    await driver.sleep(1000);
});

When("I enter valid email as {string} for login", async function (email) {
    let userEmail = await driver.wait(until.elementLocated(By.css('[type="email"]')), 20000);
    await userEmail.clear();
    await userEmail.sendKeys(email);
    await driver.sleep(1000);
});

When("I enter valid password as {string} for login", async function (password) {
    let userPassword = await driver.wait(until.elementLocated(By.css('[type="password"]')), 20000);
    await userPassword.clear();
    await userPassword.sendKeys(password);
    await driver.sleep(1000);
});

When("I click on the Login button", async function () {
    await driver.wait(until.elementLocated(By.css('button[type="submit"]')), 20000).click();
});

When("I should get the message for login {string}", async function (msg) {
    await driver.wait(until.alertIsPresent(), 20000); // Increased timeout
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

When("I click on the product", async function () {
    await driver.wait(until.elementLocated(By.id('card')), 30000).click(); // Increased timeout
    await driver.sleep(1000);
});

When("It should navigate to the new window", async function () {
    const windowHandles = await driver.getAllWindowHandles();

    const originalWindow = windowHandles[0];
    const newWindow = windowHandles[1];

    await driver.switchTo().window(newWindow);
});

When("I click on the add to cart button", async function () {
    await driver.wait(until.elementLocated(By.id('additem')), 20000).click();
});

When("I should get the message for cart {string}", async function (msg) {
    await driver.wait(until.alertIsPresent(), 20000); // Increased timeout
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

Then("The carted product there in cart page", async function () {
    await driver.wait(until.elementLocated(By.css('a[href="/cart"]')), 20000).click();
    await driver.sleep(1000);
});
