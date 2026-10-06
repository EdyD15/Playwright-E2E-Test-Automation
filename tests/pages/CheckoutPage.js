exports.CheckoutPage = class CheckoutPage {
    
    constructor(page) {
        this.page = page;
        // Define elements for the checkout flow
        this.addToCartButton = page.locator('[data-test="add-to-cart-sauce-labs-backpack"]');
        this.cartBadge = page.locator('.shopping_cart_badge');
        this.cartLink = page.locator('.shopping_cart_link');
        this.checkoutButton = page.locator('[data-test="checkout"]');
        
        this.firstNameInput = page.locator('[data-test="firstName"]');
        this.lastNameInput = page.locator('[data-test="lastName"]');
        this.postalCodeInput = page.locator('[data-test="postalCode"]');
        this.continueButton = page.locator('[data-test="continue"]');
        this.finishButton = page.locator('[data-test="finish"]');
        
        this.successMessage = page.locator('.complete-header');
    }

    // Flow actions
    async addBackpackToCart() {
        await this.addToCartButton.click();
    }

    async goToCheckout() {
        await this.cartLink.click();
        await this.checkoutButton.click();
    }

    async fillShippingDetails(firstName, lastName, postalCode) {
        await this.firstNameInput.fill(firstName);
        await this.lastNameInput.fill(lastName);
        await this.postalCodeInput.fill(postalCode);
        await this.continueButton.click();
    }

    async completeOrder() {
        await this.finishButton.click();
    }
};