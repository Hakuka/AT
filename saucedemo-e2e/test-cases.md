### login

Verify that the user can log in to the application. Four cases are tested:

- Standard user (correct username and password) – login successful
- Standard user (correct username and incorrect password) – login denied
- Standard user (incorrect username and correct password) – login denied
- Locked user (correct username and password) – login denied

### product-List

Verify that the product list is displayed correctly based on the following criteria:

- Product list is available on /inventory.html after login
- Each product has a unique photo and name
- Each product has a price

### scenario-1

Basic scenario for buying product:

1. Login to app as standard user.
2. Add Sauce Labs Backpack and Sauce Labs Fleece Jacket to the cart.
3. Verify that cart has correct items added with correct price and quantity.
4. Go to the checkout.
5. Enter first name, last name, zip/postal code.
6. Verify total price if it's correct.
7. Finish order and go back to the home page.

Note:

- Item and prices should be stored in fixtures for possible change in the future.
- First name, last name and zip/postal code should be randomizes every time to avoid burning out tests.
