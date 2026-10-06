# E2E Web Testing Automation with Playwright

## Project Overview
This is a personal project demonstrating automated End-to-End (E2E) testing for an e-commerce platform. The framework is built using **Playwright** and **JavaScript**, focusing on modularity, scalability, and clean code practices.

## Architecture
The project strictly follows the **Page Object Model (POM)** design pattern. Selectors and page-specific actions are separated from the test scripts, making the code highly maintainable.

## Automated Scenarios
**Authentication Module:**
   - Happy Path: Successful login with valid credentials.
   - Negative Testing / Edge Case: Triggering and validating exact error messages for invalid passwords.
**Checkout Flow Module:**
   - Adding items to the cart and validating cart badge state.
   - Completing the E2E checkout process with shipping details.
   - Validating the final order confirmation screen via strict assertions.

## How to Run Locally
1. Clone this repository.
2. Run `npm install` to download dependencies.
3. Run `npx playwright test` to execute the automated suite.# Playwright-E2E-Test-Automation
E2E automated testing framework built with Playwright and JavaScript using POM architecture.
