const { test, expect } = require('@playwright/test');
const { LoginPage } = require('./pages/LoginPage');
const { CheckoutPage } = require('./pages/CheckoutPage');

test.describe('Checkout Module', () => {
    
    test('Complete E2E purchase flow successfully', async ({ page }) => {
        const loginPage = new LoginPage(page);
        const checkoutPage = new CheckoutPage(page);

        // Prerequisite: Log in
        await loginPage.navigate();
        await loginPage.login('standard_user', 'secret_sauce');

        // Add item to cart and verify
        await checkoutPage.addBackpackToCart();
        await expect(checkoutPage.cartBadge).toBeVisible();
        await expect(checkoutPage.cartBadge).toHaveText('1');

        // Proceed to checkout
        await checkoutPage.goToCheckout();

        // Provide shipping details and complete order
        await checkoutPage.fillShippingDetails('John', 'Doe', '123456');
        await checkoutPage.completeOrder();

        // Verify successful purchase
        await expect(checkoutPage.successMessage).toBeVisible();
        await expect(checkoutPage.successMessage).toHaveText('Thank you for your order!');
    });

});