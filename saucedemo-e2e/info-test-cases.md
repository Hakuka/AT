### login

Verify that the user can login to the application. Four cases are tested:

- Standard user (correct username and password) – login successful
- Standard user (correct username and incorrect password) – login denied
- Standard user (incorrect username and correct password) – login denied
- Locked user (correct username and password) – login denied

### product-List

Verify that the product list is displayed correctly based on the following criteria:

- Product list is available on /inventory.html after login
- Each product has a unique photo and name
- Each product has a price

Verify that product list have option to sort products with correct options.

### scenario-1 - purchase-happy-path

Basic scenario for buying products:

1. Login to app as standard user.
2. Add Sauce Labs Backpack and Sauce Labs Fleece Jacket to the cart.
3. Go to the cart and verify that correct items were added with correct quantity.
4. Go to the checkout.
5. Enter first name, last name, zip/postal code and go to the checkout overview.
6. Verify added items and total price if it's correct.
7. Finish order and go back to the products page.

### scenario-2 - adding-removing-cart

1. Login to app as standard user.
2. Add Sauce Labs Backpack and Sauce Labs Fleece Jacket to the cart.
3. Remove Sauce Labs Backpack.
4. Go to the cart and verify that correct items were added with correct quantity.
5. Remove Sauce Labs Fleece Jacket.
6. Move back to the product list.
7. Add Sauce Labs Backpack and Sauce Labs Fleece Jacket to the cart.
8. Go to the cart and verify that correct items were added with correct quantity and prices.

---

Note:

- Item and prices should be stored in fixtures for easy change in the future.
- First name, last name and zip/postal code should be randomizes every time to avoid burning out tests (now they are not).
- One of existing tests WILL NOT pass because there is problem - it's OK (user with errors)
- Tests could (should imo) be reorganized to "support files per specific site" (POM?), since they are used in multiple test cases. Right now methods are added to the files supporting specific scenario.
- Product-list probably need refactoring to simplify code, few ideas/tests added and some part could be rewriten to use the same method.
