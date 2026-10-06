const { test, expect } = require('@playwright/test');
const { LoginPage } = require('./pages/LoginPage');

test.describe('Authentication Module', () => {
    
    test('Successful login with valid credentials', async ({ page }) => {
        const loginPage = new LoginPage(page);
        
        // Log in
        await loginPage.navigate();
        await loginPage.login('standard_user', 'secret_sauce');

        // Verify successful redirect to inventory
        await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
        await expect(page.locator('.title')).toHaveText('Products');
    });

    test('Failed login triggers correct error message', async ({ page }) => {
        const loginPage = new LoginPage(page);
        
        // Attempt login with invalid password
        await loginPage.navigate();
        await loginPage.login('standard_user', 'wrong_password123');

        // Verify the error message
        await expect(loginPage.errorMessage).toBeVisible(); 
        await expect(loginPage.errorMessage).toHaveText('Epic sadface: Username and password do not match any user in this service');
    });

});